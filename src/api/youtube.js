export default class Youtube {
  //인스턴스 만들기
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchBykeyword(keyword) : this.#mostPopular();
  }

  async ChannelImageURL(id) {
    return this.apiClient
      .channels({
        params: {
          part: "snippet",
          id,
        },
      })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async searchByChannelId(channelId) {
    return this.apiClient
      .playlist({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          channelId,
        },
      })
      .then((res) => res.data.items);
  }

  async #searchBykeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }
}
