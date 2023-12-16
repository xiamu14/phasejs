import Big from "big.js";

export function div(a: number, b: number, dp?: number) {
  if (dp) {
    Big.DP = dp;
  }
  return new Big(a).div(b).toNumber();
}

export function times(a: number, b: number, dp?: number) {
  if (dp) {
    Big.DP = dp;
  }
  return new Big(a).times(b).toNumber();
}
