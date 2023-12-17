export function isUsefulArray(list?: any[]) {
  if ((list ?? []).length > 0) return true;
  return false;
}

export function removeArrayItem<T>(
  data: T[],
  index: number | ((item: T) => true)
) {
  if (data.length > 0) {
    const indexNum =
      typeof index === "function" ? data.findIndex(index) : index;
    return indexNum !== -1 ? data.splice(indexNum, 1) : data;
  }
  return data;
}
