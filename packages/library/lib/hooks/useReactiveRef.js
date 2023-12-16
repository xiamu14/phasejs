"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useReactiveRef = (value) => {
    const ref = (0, react_1.useRef)(value);
    const valueRef = (0, react_1.useMemo)(() => {
        return ref.current;
    }, []);
    (0, react_1.useEffect)(() => {
        if (ref.current !== value) {
            ref.current = value;
        }
    }, [value]);
    return valueRef;
};
exports.default = useReactiveRef;
