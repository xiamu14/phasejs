"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayRemove = exports.isUsefulArray = void 0;
function isUsefulArray(list) {
    if ((list !== null && list !== void 0 ? list : []).length > 0)
        return true;
    return false;
}
exports.isUsefulArray = isUsefulArray;
function arrayRemove(data, index) {
    if (data.length > 0) {
        const indexNum = typeof index === "function" ? data.findIndex(index) : index;
        return indexNum !== -1 ? data.splice(indexNum, 1) : data;
    }
    return data;
}
exports.arrayRemove = arrayRemove;
