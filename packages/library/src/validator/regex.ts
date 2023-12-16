// 校验数据的正则或方法

/**
 * @description 校验微信号
 */
export const wxPattern = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;

/**
 * @description 校验手机号
 */
export const phonePattern =
  /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;

/**
 * @description 校验邮箱
 */
export const emailPattern =
  /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
