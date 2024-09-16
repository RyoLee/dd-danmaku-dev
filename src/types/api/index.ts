// ref: https://api.dandanplay.net/swagger/ui/index
interface SearchEpisodesResponse {
  /**
   * 是否有更多未显示的搜索结果。当返回的搜索结果过多时此值为true
   * @type {boolean}
   */
  hasMore: boolean;
  /**
   * 搜索结果（作品信息）列表
   * @type {Array<SearchEpisodesAnime>}
   */
  animes?: Array<SearchEpisodesAnime>;
  /**
   * 错误代码，0表示没有发生错误，非0表示有错误，详细信息会包含在errorMessage属性中
   * @type {number}
   */
  errorCode: number;
  /**
   * 接口是否调用成功
   * @type {boolean}
   */
  success: boolean;
  /**
   * 当发生错误时，说明错误具体原因
   * @type {string}
   */
  errorMessage?: string;
}
interface SearchEpisodesAnime {
  /**
   * 作品编号
   * @type {number}
   */
  animeId: number;
  /**
   * 作品标题
   * @type {string}
   */
  animeTitle?: string;
  /**
   * 作品类型 = ['tvseries', 'tvspecial', 'ova', 'movie', 'musicvideo', 'web', 'other', 'jpmovie', 'jpdrama', 'unknown']
   * @type {string}
   */
  type: string;
  /**
   * 类型描述
   * @type {string}
   */
  typeDescription?: string;
  /**
   * 此作品的剧集列表
   * @type {Array<SearchEpisodeDetails>}
   */
  episodes?: Array<SearchEpisodeDetails>;
}
interface SearchEpisodeDetails {
  /**
   * 剧集ID（弹幕库编号）
   * @type {number}
   */
  episodeId: number;
  /**
   * 剧集标题
   * @type {string}
   */
  episodeTitle?: string;
}
interface GetCommentResponse {
  /**
   * 总数
   */
  count: number;
  /**
   * 评论列表
   */
  comments: Array<Comment>;
}
interface Comment {
  /**
   * 评论ID
   */
  cid: number;
  // "1214.67,1,16777215,-1",
  /**
   * 评论坐标参数: 出现时间, 模式, 颜色, 用户ID
   */
  p: string;
  m: string;
}
export { SearchEpisodesResponse, SearchEpisodesAnime, SearchEpisodeDetails, GetCommentResponse, Comment };
