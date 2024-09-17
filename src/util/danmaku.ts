import { DanmakuComment, CommentModeMapping, CommentMode } from '@/types/util/danmaku';
import { Comment } from '@/types/api';
import { config } from '@/util/config';

const format = (comments: Comment[]): DanmakuComment[] => {
  const dFontSize = parseInt(config.get('fontSize') || '16');
  const dFont = config.get('font') || 'sans-serif';
  return (
    comments
      .map((comment) => {
        const [sTime, sMode, sColor, sUid] = comment.p.split(',');
        const cMode = parseInt(sMode);
        const dMode = CommentModeMapping.get(cMode) || CommentMode.RTL;
        const dColor = `000000${Number(sColor).toString(16)}`.slice(-6);
        return {
          text: comment.m,
          mode: dMode,
          time: parseFloat(sTime),
          style: {
            fontSize: `${dFontSize}px`,
            color: `#${dColor}`,
            textShadow: dColor === '00000' ? '-1px -1px #fff, -1px 1px #fff, 1px -1px #fff, 1px 1px #fff' : '-1px -1px #000, -1px 1px #000, 1px -1px #000, 1px 1px #000',
            font: `${dFontSize}px ${dFont}`,
            fillStyle: `#${dColor}`,
            strokeStyle: dColor === '000000' ? '#fff' : '#000',
            lineWidth: 2.0,
          },
        };
      })
      // remove blank comments
      .filter((comment) => comment.text.trim() !== '')
  );
};
const filter = (comments: DanmakuComment[]): DanmakuComment[] => {
  const level = parseInt(config.get('filterLevel') || '0');
  if (level === 0) {
    return comments;
  }
  const limit = 9 - level * 2;
  let verticalLimit = 6;
  let resComments: DanmakuComment[][] = [];
  let verticalComments: DanmakuComment[][] = [];
  for (let index = 0; index < comments.length; index++) {
    let element = comments[index];
    let timeIndex = Math.ceil(element.time);
    let verticalTimeIndex = Math.ceil(element.time / 3);
    if (!resComments[timeIndex]) {
      resComments[timeIndex] = [];
    }
    if (!verticalComments[verticalTimeIndex]) {
      verticalComments[verticalTimeIndex] = [];
    }
    // TODO: 屏蔽过滤
    if (verticalComments[verticalTimeIndex].length < verticalLimit) {
      verticalComments[verticalTimeIndex].push(element);
    } else {
      element.mode = CommentMode.RTL;
    }
    if (resComments[timeIndex].length < limit) {
      resComments[timeIndex].push(element);
    }
  }
  return resComments.flat();
};
export { format, filter };
