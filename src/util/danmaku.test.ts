import { formatAdapter } from './danmaku';
import { Comment } from '@/types/api';

describe('formatAdapter', () => {
  test('one-comment', () => {
    const comments = [{ cid: 1, p: '1214.67,1,16777215,-1', m: 'testComment' }];
    const result = formatAdapter(comments);
    expect(result).toEqual([
      {
        mode: 'rtl',
        style: {
          color: '#ffffff',
          fillStyle: '#ffffff',
          font: '16px sans-serif',
          fontSize: '16px',
          lineWidth: 2,
          strokeStyle: '#000',
          textShadow: '-1px -1px #000, -1px 1px #000, 1px -1px #000, 1px 1px #000',
        },
        text: 'testComment',
        time: 1214.67,
      },
    ]);
  });
  test('blank', () => {
    const comments = [{ cid: 1, p: '1214.67,1,16777215,-1', m: '' }];
    const result = formatAdapter(comments);
    expect(result).toEqual([]);
  });
  test('empty', () => {
    const comments: Comment[] = [];
    const result = formatAdapter(comments);
    expect(result).toEqual([]);
  });
});
