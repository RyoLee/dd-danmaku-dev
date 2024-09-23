import { GetCommentResponse, SearchEpisodesResponse, BangumiDetailsResponse } from '@/types/api';
const fetch = require('node-fetch');
const cors_proxy = 'https://api.9-ch.com/cors/';
const api_server = 'https://api.dandanplay.net';
const api_prefix = '/api/v2';
const api_mappping = {
  searchEpisode: `${cors_proxy}${api_server}${api_prefix}/search/episodes`,
  getComment: `${cors_proxy}${api_server}${api_prefix}/comment`,
  getBangumiDetail: `${cors_proxy}${api_server}${api_prefix}/bangumi`,
};
const headers = {
  'Content-Type': 'application/json',
  'Accept-Encoding': 'gzip',
  'User-Agent': navigator.userAgent,
};
const searchEpisode = async (keyword: string, withRelated: boolean = true): Promise<SearchEpisodesResponse> => {
  const url = `${api_mappping.searchEpisode}?anime=${keyword}&withRelated=${withRelated}`;
  const response = await fetch(url, { method: 'GET', headers: headers });
  return (await response.json()) as SearchEpisodesResponse;
};
const getComment = async (episodeId: number, from: number = 0, withRelated: boolean = true, chConvert: boolean = true): Promise<GetCommentResponse> => {
  const url = `${api_mappping.getComment}?episodeId=${episodeId}&from=${from}&withRelated=${withRelated}&chConvert=${chConvert}`;
  const response = await fetch(url, { method: 'GET', headers: headers });
  return (await response.json()) as GetCommentResponse;
};
const getBangumiDetail = async (animeId: number): Promise<BangumiDetailsResponse> => {
  const url = `${api_mappping.getBangumiDetail}/${animeId}`;
  const response = await fetch(url, { method: 'GET', headers: headers });
  return (await response.json()) as BangumiDetailsResponse;
};
export { searchEpisode, getComment, getBangumiDetail };
