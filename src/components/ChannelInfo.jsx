import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: url,
  } = useQuery({
    queryKey: ["channel", id],
    queryFn: () => youtube.ChannelImageURL(id),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className="flex my-4 mb-8 items-center">
      {error && subChannelImage(name)}
      {isLoading && subChannelImage(name)}
      {url && <img className="w-10 h-10 rounded-full" src={url} alt={name} />}
      <p className="text-lg font-medium ml-2">{name}</p>
    </div>
  );
}

const subChannelImage = (name) => {
  return (
    <div
      style={{
        width: "88px",
        height: "88px",
        backgroundColor: "#333",
        color: "white",
        fontWeight: "700",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "50px" }}>{name[0]}</p>
    </div>
  );
};
