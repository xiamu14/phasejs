"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.times = exports.div = void 0;
const big_js_1 = __importDefault(require("big.js"));
function div(a, b, dp) {
    if (dp) {
        big_js_1.default.DP = dp;
    }
    return new big_js_1.default(a).div(b).toNumber();
}
exports.div = div;
function times(a, b, dp) {
    if (dp) {
        big_js_1.default.DP = dp;
    }
    return new big_js_1.default(a).times(b).toNumber();
}
exports.times = times;
