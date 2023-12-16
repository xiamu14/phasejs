"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isEqual_1 = __importDefault(require("lodash/isEqual"));
/**
 * @desc 多值选择类
 */
class Selector {
    /**
     * 定义具有多值的枚举属性类
     * @param data
     */
    constructor(data) {
        this.data = data;
    }
    /**
     * 获取数组中此键名的值组成的数组
     * @param key
     */
    values(key) {
        const result = this.data.map((item) => item[key]);
        return result;
    }
    /**
     * 根据特定的 key value 获取到数组子项
     * @param key
     * @param val
     */
    item(key, val) {
        const result = this.data.filter((item) => (0, isEqual_1.default)(item[key], val));
        if (result.length === 0) {
            throw new Error(`the val:${val} does not exit.`);
        }
        return result[0];
    }
}
exports.default = Selector;
