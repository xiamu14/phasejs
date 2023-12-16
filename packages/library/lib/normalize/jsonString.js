"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 标准化 JSON 字符串
function normalizeJsonString(json) {
    try {
        const data = JSON.parse(json);
        return { isValid: true, error: null, json, data };
    }
    catch (error) {
        return { isValid: false, error: error, json, data: undefined };
    }
}
exports.default = normalizeJsonString;
