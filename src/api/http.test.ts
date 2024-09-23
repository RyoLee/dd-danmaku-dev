import { searchEpisode, getComment, getBangumiDetail } from './http';
import fs from 'fs';

const readMockJsonByPath = (path: string) => {
  const basePath = process.cwd();
  return JSON.parse(fs.readFileSync(`${basePath}/mocks/${path}`, 'utf8'));
};

// mock fetch
const fetch = require('node-fetch');
// mock fetch response
const mockFetchResponse = (data: any) => {
  (fetch as jest.Mock).mockResolvedValue({
    json: async () => data,
  });
};
jest.mock('node-fetch', () => jest.fn());
// test cases
describe('api/http', () => {
  test('searchEpisode-success', async () => {
    const successResponse = readMockJsonByPath('api/searchEpisode-s.json');
    mockFetchResponse(successResponse);

    const response = await searchEpisode('笨蛋测验召唤兽');
    expect(response.success).toBe(true);
    expect(response.animes).toBeDefined();
    expect(response.animes).toBeDefined();
    if (response.animes) {
      expect(response.animes.length).toBeGreaterThan(0);
    }
  });
  test('searchEpisode-failed', async () => {
    const failedResponse = readMockJsonByPath('api/searchEpisode-f.json');
    mockFetchResponse(failedResponse);
    const response = await searchEpisode('测AAAAA试');
    expect(response.success).toBe(true);
    expect(response.errorMessage).toBe('');
    expect(response.errorCode).toBe(0);
    if (response.animes) {
      expect(response.animes.length).toBe(0);
    }
    const responseWithAllParams = await searchEpisode('测AAAAA试', false);
    expect(responseWithAllParams).toBe(response);
  });
});

describe('api/http', () => {
  test('getComment-success', async () => {
    const successResponse = readMockJsonByPath('api/getComment-s.json');
    mockFetchResponse(successResponse);

    const response = await getComment(67470010);
    expect(response.count).toBeGreaterThan(0);
    expect(response.comments).toBeDefined();
    expect(response.comments.length).toBe(3);
  });
  test('getComment-failed', async () => {
    const failedResponse = readMockJsonByPath('api/getComment-f.json');
    mockFetchResponse(failedResponse);
    const response = await getComment(674700101);
    expect(response.count).toBe(0);
    expect(response.comments).toBeDefined();
    expect(response.comments.length).toBe(0);
    const responseWithAllParams = await getComment(674700101, 0, false, false);
    expect(responseWithAllParams).toBe(response);
  });
});

describe('api/http', () => {
  test('getBangumiDetail-success', async () => {
    const successResponse = readMockJsonByPath('api/getBangumiDetail-s.json');
    mockFetchResponse(successResponse);

    const response = await getBangumiDetail(6747);
    expect(response.success).toBe(true);
    expect(response.bangumi).toBeDefined();
    expect(response.bangumi?.animeId).toBe(6747);
    expect(response.bangumi?.episodes).toBeDefined();
    expect(response.bangumi?.episodes?.length).toBe(26);
  });
  test('getBangumiDetail-failed', async () => {
    const failedResponse = readMockJsonByPath('api/getBangumiDetail-f.json');
    mockFetchResponse(failedResponse);
    const response = await getBangumiDetail(67471);
    expect(response.success).toBe(false);
    expect(response.bangumi).toBe(null);
    expect(response.errorMessage).toBe('无法找到指定的资源');
    expect(response.errorCode).toBe(7);
  });
});
