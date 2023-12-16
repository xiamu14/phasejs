import isEqual from "lodash/isEqual";
/**
 * @desc 多值选择类
 */

export default class Selector<T extends Record<string, any>> {
  public data: T[];

  /**
   * 定义具有多值的枚举属性类
   * @param data
   */
  public constructor(data: T[]) {
    this.data = data;
  }

  /**
   * 获取数组中此键名的值组成的数组
   * @param key
   */
  public values(key: keyof T) {
    const result = this.data.map((item) => item[key]);
    return result;
  }

  /**
   * 根据特定的 key value 获取到数组子项
   * @param key
   * @param val
   */

  public item(key: keyof T, val: T[typeof key]) {
    const result = this.data.filter((item: T) => isEqual(item[key], val));
    if (result.length === 0) {
      throw new Error(`the val:${val} does not exit.`);
    }
    return result[0];
  }

  /**
   * 返回 pro-table 类型所需的 valueEnum 格式数据
   */
  // public valueEnum() {
  //   const valueEnum: Record<string, { text: any; status: any }> = {};
  //   this.data.forEach((item) => {
  //     valueEnum[item.id] = {
  //       text: item.val,
  //       status: item.status,
  //     };
  //   });

  //   return valueEnum;
  // }
}
