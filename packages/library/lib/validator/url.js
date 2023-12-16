"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isValidHttpUrl(url) {
    try {
        const newUrl = new URL(url);
        return newUrl.protocol === "http:" || newUrl.protocol === "https:";
    }
    catch (err) {
        return false;
    }
}
exports.default = isValidHttpUrl;
