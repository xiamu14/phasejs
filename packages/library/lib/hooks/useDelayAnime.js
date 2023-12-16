"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
var State;
(function (State) {
    State[State["RUNNING"] = 0] = "RUNNING";
    State[State["FINISHED"] = 1] = "FINISHED";
})(State || (State = {}));
function useDelayAnime({ delay, period, onRun, onFinish, debug, }) {
    const [state, setState] = (0, react_1.useState)();
    const startRef = (0, react_1.useRef)(0);
    const delayRef = (0, react_1.useRef)(delay);
    const periodRef = (0, react_1.useRef)(period);
    const debugRef = (0, react_1.useRef)(debug);
    const startTimerRef = (0, react_1.useRef)();
    const start = (0, react_1.useCallback)(() => {
        if (state === undefined) {
            startTimerRef.current = setTimeout(() => {
                if (state === undefined) {
                    setState(State.RUNNING);
                    startRef.current = Date.now();
                    onRun === null || onRun === void 0 ? void 0 : onRun();
                }
            }, delayRef.current);
        }
    }, [onRun, state]);
    (0, react_1.useEffect)(() => {
        if (state === State.FINISHED) {
            if (debugRef.current && startRef.current) {
                console.log("--running time", Date.now() - startRef.current);
            }
            onFinish === null || onFinish === void 0 ? void 0 : onFinish();
            setState(undefined);
            clearTimeout(startTimerRef.current);
        }
    }, [state, onFinish]);
    const stop = (0, react_1.useCallback)(() => {
        if (state === State.RUNNING) {
            const runTime = Date.now() - startRef.current;
            const duration = runTime < periodRef.current
                ? periodRef.current - runTime
                : periodRef.current - (runTime % periodRef.current);
            if (debugRef.current) {
                console.log("--duration", runTime, periodRef.current % runTime, duration);
            }
            if (duration > 0) {
                // TODO: 完成动画周期
                setTimeout(() => {
                    setState(State.FINISHED);
                }, duration);
            }
            else {
                setState(State.FINISHED);
            }
        }
        else if (state === undefined) {
            setState(State.FINISHED);
        }
    }, [state]);
    return { stop, start };
}
exports.default = useDelayAnime;
