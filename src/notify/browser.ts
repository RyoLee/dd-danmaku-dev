const send = (title: string, message: string) => {
  const Notification = window.Notification;
  if (Notification.permission === 'granted') {
    new Notification(title, { body: message });
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission((permission) => {
      if (permission === 'granted') {
        new Notification(title, { body: message });
      }
    });
  }
};
export { send };
