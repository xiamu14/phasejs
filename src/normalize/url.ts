// 标准化 url，方便获取 hostname ，query 等
export default function normalizeUrl(url: string) {
  try {
    const urlObject = new URL(url);
    return { isValid: true, error: null, url, data: urlObject };
  } catch (error) {
    return { isValid: false, error: error, url, data: undefined };
  }
}
