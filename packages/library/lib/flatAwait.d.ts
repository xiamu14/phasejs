export declare function flatAwait<T, U = Error>(promise: Promise<T>): Promise<[U, undefined] | [null, T]>;
