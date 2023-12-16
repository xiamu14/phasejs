"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.diffData = void 0;
const isEqual_1 = __importDefault(require("lodash/isEqual"));
function diffData(source, changed) {
    const add = changed.filter((it) => {
        return source.every((item) => !(0, isEqual_1.default)(item, it));
    });
    const remove = source.filter((it) => {
        return changed.every((item) => !(0, isEqual_1.default)(item, it));
    });
    const unChange = changed.filter((it) => source.some((item) => (0, isEqual_1.default)(item, it)));
    return {
        remove,
        add,
        unChange,
    };
}
exports.diffData = diffData;
