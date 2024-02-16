import isEqual from "lodash/isEqual";

export function diffArray<T>(
  source: T[],
  newList: T[]
): {
  add: T[];
  remove: T[];
  unChange: T[];
} {
  const add = newList.filter((it) => {
    return source.every((item) => !isEqual(item, it));
  });
  const remove = source.filter((it) => {
    return newList.every((item) => !isEqual(item, it));
  });
  const unChange = newList.filter((it) =>
    source.some((item) => isEqual(item, it))
  );
  return {
    remove,
    add,
    unChange,
  };
}
