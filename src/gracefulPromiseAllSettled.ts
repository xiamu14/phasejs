const gracefulPromiseAllSettled = async <T extends Record<string, any>>(
  collection: Record<keyof T, () => Promise<T[keyof T]>>
) => {
  const names = Object.keys(collection);
  const promiseFnList = names.map((item) => collection[item]());
  const result = await Promise.allSettled(promiseFnList);
  return result.map((item, index) => {
    return {
      ...item,
      name: names[index] as keyof T,
    };
  });
};

export default gracefulPromiseAllSettled;
