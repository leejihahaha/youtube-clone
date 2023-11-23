import { createContext, useContext } from "react";
import FakeYoutubeClient from "../api/fakeYotubeClient";
// import YoutubeClient from "../api/fakeYotubeClient";
import Youtube from "../api/youtube";

export const YoutubeApiContext = createContext();

//인스턴스 딱한번 만들어서 provider로 전달

// const client = new YoutubeClient();
const client = new FakeYoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
