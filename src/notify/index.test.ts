import { send } from '@/notify';

describe('send notification', () => {
  test('send notification', () => {
    send('title', 'message');
  });
});
