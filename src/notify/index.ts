import { send as browser } from '@/notify/browser';
const dSend = (title: string, message: string) => {
  console.log(`title: ${title}, message: ${message}`);
};
const send = this === window ? browser : dSend;
export { send };
