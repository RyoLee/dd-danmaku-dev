import { DanDanDanmaku } from '@/ddd';

export class BaseClient implements Client {
    ddd: DanDanDanmaku;
    constructor(ddd: DanDanDanmaku) {
        this.ddd = ddd;
    }
    init() {
        throw this.ddd.locales.exception.notSupportedClient;
    }
    static isEnv(): boolean {
        return false;
    }
}
