//  id = ?
//  pw = ?
//  name = ?
//  "{key} = ? "

function searchFilter(body, options) {
    const result = {
        whereClause: [],
        params: []
    };

    for (const key of Object.keys(body)) {
        if (options.includes(key)) {
            const str = `user_${key} = ?`;

            result.whereClause.push(str);
            result.params.push(body[key]);
        }
    }

    result.whereClause = result.whereClause.join(" AND ");

    return result;
}

module.exports = {
    searchFilter
}