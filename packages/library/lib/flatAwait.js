"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatAwait = void 0;
function flatAwait(promise) {
    return promise
        .then((data) => [null, data])
        .catch((err) => {
        return [err, undefined];
    });
}
exports.flatAwait = flatAwait;
