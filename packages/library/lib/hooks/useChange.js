"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isEqual_1 = __importDefault(require("lodash/isEqual"));
const react_1 = require("react");
function useChange(action, prop) {
    const prev = (0, react_1.useRef)();
    (0, react_1.useEffect)(() => {
        if (!(0, isEqual_1.default)(prev.current, prop)) {
            prev.current = prop;
            action(prop);
        }
    }, [action, prop]);
}
exports.default = useChange;
