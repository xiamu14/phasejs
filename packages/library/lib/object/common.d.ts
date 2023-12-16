export declare function isUsefulObject(object: Record<string | number | symbol, unknown>): boolean;
/**
 * @description 从对象里保留部分字段
 * @param object
 * @param keys
 * @returns
 */
export declare function pick<T extends Record<string | number | symbol, unknown>, K extends keyof T>(object: T, keys: K[]): Pick<T, K>;
