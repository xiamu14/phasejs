/**
 *
 * @param ratio 屏幕可视宽度所占比例
 * @param minWidth 最小屏幕宽度
 * @param maxWidth 最大屏幕宽度
 * @returns
 */
export function widthWithScreen(
  ratio: number,
  { minWidth = 0, maxWidth = 1 }: { minWidth?: number; maxWidth?: number }
) {
  const firstWidth = Math.max(
    minWidth,
    document.body.clientWidth * (ratio > 1 || ratio < 0 ? 1 : ratio)
  );

  if (maxWidth > minWidth) {
    return Number(Math.min(maxWidth, firstWidth).toFixed(2));
  }
  return firstWidth;
}
