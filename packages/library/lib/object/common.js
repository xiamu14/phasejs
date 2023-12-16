"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = exports.isUsefulObject = void 0;
function isUsefulObject(object) {
    return Object.keys(object).length === 0;
}
exports.isUsefulObject = isUsefulObject;
/**
 * @description 从对象里保留部分字段
 * @param object
 * @param keys
 * @returns
 */
function pick(object, keys) {
    return keys.reduce((obj, key) => {
        if (object && object.hasOwnProperty(key)) {
            obj[key] = object[key];
        }
        return obj;
    }, {});
}
exports.pick = pick;
