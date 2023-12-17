import { BaseClient } from '@/clients/client';

export class EmbyClient extends BaseClient {
    static isEnv(): boolean {
        return 'Emby' === (document.querySelector('meta[name="application-name"]') as HTMLMetaElement)?.content || document.documentElement.classList.contains('accent-emby');
    }
    /* 初始化入口 */
    init() {
        console.log('EmbyClient init');
        // this.initWatcher();
    }
    initWatcher() {
        throw new Error('Method not implemented.');
    }

    initUI() {
        throw new Error('Method not implemented.');
    }
    createButton() {
        throw new Error('Method not implemented.');
    }
    getElementsByInnerText() {
        throw new Error('Method not implemented.');
    }
}
