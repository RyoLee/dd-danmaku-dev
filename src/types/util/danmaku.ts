enum CommentMode {
  RTL = 'rtl',
  LTR = 'ltr',
  TOP = 'top',
  BOTTOM = 'bottom',
}
const CommentModeMapping: Map<number, CommentMode> = new Map([
  [1, CommentMode.RTL],
  [6, CommentMode.LTR],
  [5, CommentMode.TOP],
  [4, CommentMode.BOTTOM],
]);
interface DanmakuComment {
  /**
   * 内容
   */
  text: string;
  /**
   * 展示模式, 默认为 rtl
   *
   * @default CommentMode.RTL
   * @example CommentMode.RTL
   * @example CommentMode.LTR
   * @example CommentMode.TOP
   * @example CommentMode.BOTTOM
   */
  mode: CommentMode;
  /**
   * 弹幕出现时间, 单位为秒
   * 在使用媒体模式时, 如果未设置, 会默认为音视频的当前时间; 实时模式不需要设置
   * @type {number}
   * @example 233.3
   */
  time: number;
  /**
   * 弹幕样式
   * @type {DanmakuStyle}
   */
  style: DanmakuStyle;
}
interface DanmakuStyle {
  fontSize: string;
  color: string;
  textShadow: string;
  font: string;
  fillStyle: string;
  strokeStyle: string;
  lineWidth: number;
}
export { DanmakuComment, CommentModeMapping, CommentMode };
