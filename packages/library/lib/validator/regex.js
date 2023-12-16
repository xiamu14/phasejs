"use strict";
// 校验数据的正则或方法
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailPattern = exports.phonePattern = exports.wxPattern = void 0;
/**
 * @description 校验微信号
 */
exports.wxPattern = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;
/**
 * @description 校验手机号
 */
exports.phonePattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
/**
 * @description 校验邮箱
 */
exports.emailPattern = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
