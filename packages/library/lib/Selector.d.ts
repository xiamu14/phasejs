/**
 * @desc 多值选择类
 */
export default class Selector<T extends Record<string, any>> {
    data: T[];
    /**
     * 定义具有多值的枚举属性类
     * @param data
     */
    constructor(data: T[]);
    /**
     * 获取数组中此键名的值组成的数组
     * @param key
     */
    values(key: keyof T): T[keyof T][];
    /**
     * 根据特定的 key value 获取到数组子项
     * @param key
     * @param val
     */
    item(key: keyof T, val: T[typeof key]): T;
}
