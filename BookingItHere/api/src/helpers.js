/**
 * Allow fields in object
 *
 * @author João Ponte
 * @param obj
 * @param allowFields
 * @returns {*}
 */
exports.allowFieldsObject = function(obj, allowFields) {
    for (let propName in obj) {
        if (allowFields.includes(propName) === false) {
            delete obj[propName];
        }
    }
    return obj
}

/**
 * Clear empty fields in object
 *
 * @author João Ponte
 * @param obj
 * @returns {*}
 */
exports.cleanEmptyFieldsObject = function(obj) {
    for (let propName in obj) {
        if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
            delete obj[propName];
        }
    }
    return obj
}