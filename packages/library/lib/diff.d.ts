export declare function diffData<T>(source: T[], changed: T[]): {
    add: T[];
    remove: T[];
    unChange: T[];
};
