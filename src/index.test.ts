import idx from './index';
describe('main module', () => {
  test('printDanmaku', async () => {
    const res = await idx;
    expect(res).toBe(undefined);
  });
});
