import { DanmakuComment, CommentModeMapping, CommentMode } from '@/types/util/danmaku';
import { Comment } from '@/types/api';
import { config } from '@/util/config';

const formatAdapter = (comments: Comment[]): DanmakuComment[] => {
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

export { formatAdapter };
