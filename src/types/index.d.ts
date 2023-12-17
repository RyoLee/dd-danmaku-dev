export {};
import * as sc from '@/locales/zh-CN';
declare global {
    interface Window {
        require: any;
        ddd: DanDanDanmaku;
    }
    type ConfigMap = {
        [key: string]: any;
    };
    type Locals = typeof sc.default;
    interface Client {
        init(): void;
        ddd: DanDanDanmaku;
    }
    interface ClientConstructor {
        new (ddd: DanDanDanmaku): Client;
        static isEnv(): boolean;
    }
}
