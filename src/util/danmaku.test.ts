import { CommentMode, DanmakuComment } from '@/types/util/danmaku';
import { format, filter } from './danmaku';
import { Comment } from '@/types/api';
import { config } from '@/util/config';

describe('format', () => {
  test('one-comment', () => {
    const comments = [{ cid: 1, p: '1214.67,1,16777215,-1', m: 'testComment' }];
    const result = format(comments);
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
    const result = format(comments);
    expect(result).toEqual([]);
  });
  test('empty', () => {
    const comments: Comment[] = [];
    const result = format(comments);
    expect(result).toEqual([]);
  });
});
describe('filter', () => {
  test('empty', () => {
    const comments: DanmakuComment[] = [];
    const result = filter(comments);
    expect(result).toEqual([]);
  });
  test('level-0', () => {
    const comments: DanmakuComment[] = [
      {
        text: 'testComment',
        mode: CommentMode.RTL,
        time: 1214.67,
        style: {
          fontSize: '16px',
          color: '#ffffff',
          textShadow: '-1px -1px #000, -1px 1px #000, 1px -1px #000, 1px 1px #000',
          font: '16px sans-serif',
          fillStyle: '#ffffff',
          strokeStyle: '#000',
          lineWidth: 2,
        },
      },
      {
        text: 'testComment',
        mode: CommentMode.RTL,
        time: 1214.67,
        style: {
          fontSize: '16px',
          color: '#ffffff',
          textShadow: '-1px -1px #000, -1px 1px #000, 1px -1px #000, 1px 1px #000',
          font: '16px sans-serif',
          fillStyle: '#ffffff',
          strokeStyle: '#000',
          lineWidth: 2,
        },
      },
    ];
    const result = filter(comments);
    expect(result).toEqual(comments);
  });
  test('level-4', () => {
    const comments: DanmakuComment[] = [
      {
        text: 'testComment',
        mode: CommentMode.RTL,
        time: 1214.67,
        style: {
          fontSize: '16px',
          color: '#ffffff',
          textShadow: '-1px -1px #000, -1px 1px #000, 1px -1px #000, 1px 1px #000',
          font: '16px sans-serif',
          fillStyle: '#ffffff',
          strokeStyle: '#000',
          lineWidth: 2,
        },
      },
      {
        text: 'testComment',
        mode: CommentMode.RTL,
        time: 1214.67,
        style: {
          fontSize: '16px',
          color: '#ffffff',
          textShadow: '-1px -1px #000, -1px 1px #000, 1px -1px #000, 1px 1px #000',
          font: '16px sans-serif',
          fillStyle: '#ffffff',
          strokeStyle: '#000',
          lineWidth: 2,
        },
      },
    ];
    config.set('filterLevel', '4');
    const result = filter(comments);
    expect(result.length).toBe(1);
  });
});
