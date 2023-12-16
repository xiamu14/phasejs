// 标准化 JSON 字符串
export default function normalizeJsonString<T>(json: string) {
  try {
    const data = JSON.parse(json) as T;
    return { isValid: true, error: null, json, data };
  } catch (error) {
    return { isValid: false, error: error, json, data: undefined };
  }
}
