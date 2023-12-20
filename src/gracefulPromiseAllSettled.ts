const gracefulPromiseAllSettled = async <
  T extends Record<string, () => Promise<any>>,
  K extends keyof T
>(
  collection: T
) => {
  const keys = Object.keys(collection);
  const promiseFnList = keys.map((item) => collection[item]()) as ReturnType<
    T[K]
  >[];
  const result = await Promise.allSettled(promiseFnList);
  return {
    get: <K extends keyof T>(name: K) => {
      const index = keys.findIndex((n) => n === name);
      return result[index] as PromiseSettledResult<Awaited<ReturnType<T[K]>>>;
    },

    result,
  };
};

export default gracefulPromiseAllSettled;
