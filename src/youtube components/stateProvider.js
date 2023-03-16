import React, { useState, createContext } from "react";

export const AppContext = createContext(null);

const StateContextProvider = ({ children }) => {
  const [videoId, setVideoId] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [channelImage, setChannelImage] = useState("");
  const [channelName, setChannelName] = useState("");
  const [viewCount, setViewCount] = useState("");
  return (
    <AppContext.Provider
      value={{
        videoId,
        setVideoId,
        videoTitle,
        setVideoTitle,
        channelImage,
        viewCount,
        channelName,
        setChannelImage,
        setChannelName,
        setViewCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default StateContextProvider;
