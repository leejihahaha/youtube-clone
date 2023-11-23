import axios from "axios";

export default class YoutubeClient {
  //인스턴스 만들기
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(params) {
    return this.httpClient.get("search", params);
  }

  async videos(params) {
    return this.httpClient.get("videos", params);
  }

  async playlist(params) {
    return this.httpClient.get("playlists", params);
  }

  async channels(params) {
    return this.httpClient.get("channels", params);
  }
}
