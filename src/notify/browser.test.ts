import { send } from './browser';

describe('notify/browser', () => {
  let permission = 'granted';
  const mockNotification = class {
    constructor(public title: string, public options?: NotificationOptions) {}
    static permission = 'granted';
    static requestPermission(c: (p: string) => void) {
      c(permission);
    }
  };
  Object.defineProperty(window, 'Notification', { value: mockNotification });

  test('send notification', () => {
    send('title', 'message');
  });
  test('request permission', () => {
    mockNotification.permission = 'denied';
    send('title', 'message');
    mockNotification.permission = 'default';
    permission = 'granted';
    send('title', 'message');
    permission = 'denied';
    send('title', 'message');
  });
});
