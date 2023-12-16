export function isUsefulObject(
  object: Record<string | number | symbol, unknown>
) {
  return Object.keys(object).length === 0;
}

/**
 * @description 从对象里保留部分字段
 * @param object
 * @param keys
 * @returns
 */
export function pick<
  T extends Record<string | number | symbol, unknown>,
  K extends keyof T
>(object: T, keys: K[]): Pick<T, K> {
  return keys.reduce((obj, key) => {
    if (object && object.hasOwnProperty(key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {} as Pick<T, K>);
}
