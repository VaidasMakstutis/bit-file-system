const utils = {};

utils.parseJSONtoObject = (text) => {
    try {
        return JSON.parse(text);
    } catch (error) {
        return {};
    }
}

module.exports = utils;