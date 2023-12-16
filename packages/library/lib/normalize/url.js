"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 标准化 url，方便获取 hostname ，query 等
function normalizeUrl(url) {
    try {
        const urlObject = new URL(url);
        return { isValid: true, error: null, url, data: urlObject };
    }
    catch (error) {
        return { isValid: false, error: error, url, data: undefined };
    }
}
exports.default = normalizeUrl;
