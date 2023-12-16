"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareVersion = exports.random = exports.uniqueId = exports.sleep = void 0;
const sleep = (timeout = 300) => {
    return new Promise((r) => {
        setTimeout(r, timeout);
    });
};
exports.sleep = sleep;
function uniqueId() {
    return (Math.random().toString(36).substring(2) + new Date().getTime().toString(36));
}
exports.uniqueId = uniqueId;
function random({ min, max }) {
    return Math.random() * (max - min) + min;
}
exports.random = random;
function compareVersion(versionA, versionB) {
    const partsA = versionA.split(".");
    const partsB = versionB.split(".");
    for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
        const partA = parseInt(partsA[i] || "0", 10);
        const partB = parseInt(partsB[i] || "0", 10);
        if (partA > partB) {
            return 1;
        }
        else if (partA < partB) {
            return -1;
        }
    }
    return 0;
}
exports.compareVersion = compareVersion;
