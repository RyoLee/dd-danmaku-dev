import { BaseClient } from './client';
import { EmbyClient } from './emby';
import { JellyfinClient } from './jellyfin';
import { DanDanDanmaku } from '@/ddd';

const client = (ddd: DanDanDanmaku) => {
    const clients = [EmbyClient, JellyfinClient];
    for (let c of clients) {
        if (c.isEnv()) {
            return new c(ddd);
        }
    }
    return new BaseClient(ddd);
};

export default client;
