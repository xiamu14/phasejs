export declare const sleep: (timeout?: number) => Promise<unknown>;
export declare function uniqueId(): string;
export declare function random({ min, max }: {
    min: number;
    max: number;
}): number;
export declare function compareVersion(versionA: string, versionB: string): 0 | 1 | -1;
