import '@/assets/styles/global.module.css';
import { DanDanDanmaku } from '@/ddd';

const intervalId = setInterval(() => {
    if (window.require) {
        clearInterval(intervalId);
        if (!window.ddd) {
            window.ddd = new DanDanDanmaku(window, document);
            window.ddd.init();
        }
    }
}, 200);
