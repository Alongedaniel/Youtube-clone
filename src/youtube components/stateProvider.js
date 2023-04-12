import React, { useState, createContext, useEffect } from "react";

export const AppContext = createContext(null);

const StateContextProvider = ({ children }) => {
  function kFormatter(num) {
    if (Math.abs(num) > 999 && Math.abs(num) < 999999) {
      return Math.sign(num) * (Math.abs(num) / 1000).toFixed(0) + "k";
    } else if (Math.abs(num) > 999999 && !(Math.abs(num) < 999999))
      return Math.sign(num) * (num / 1000000).toFixed(1) + "M";
    else return Math.sign(num) * Math.abs(num);
  }

  function formatDuration(duration) {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

    const hours = parseInt((match[1] || "00").slice(0, -1));
    const minutes = parseInt((match[2] || "00").slice(0, -1));
    const seconds = parseInt((match[3] || "00").slice(0, -1));

    if (hours >= 1) {
      return `${hours}:${padZero(minutes)}:${padZero(seconds)}`;
    } else {
      return `${minutes}:${padZero(seconds)}`;
    }
  }
  function formatWholeDuration(duration) {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

    const hours = parseInt((match[1] || "00").slice(0, -1));
    const minutes = parseInt((match[2] || "00").slice(0, -1));
    const seconds = parseInt((match[3] || "00").slice(0, -1));

    if (hours >= 1) {
      return `${hours}${padZero(minutes)}${padZero(seconds)}`;
    } else {
      return `${minutes}${padZero(seconds)}`;
    }
  }

  function padZero(num) {
    return num.toString().padStart(2, "0");
  }

  function getTimeDiffString(date) {
    const now = new Date();
    const diffMs = now - date;
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);
    const diffMonth = Math.floor(diffDay / 30);
    const diffYear = Math.floor(diffMonth / 12);

    if (diffYear > 0) {
      return `${diffYear} year${diffYear > 1 ? "s" : ""} ago`;
    } else if (diffMonth > 0) {
      return `${diffMonth} month${diffMonth > 1 ? "s" : ""} ago`;
    } else if (diffDay > 0) {
      return `${diffDay} day${diffDay > 1 ? "s" : ""} ago`;
    } else if (diffHour > 0) {
      return `${diffHour} hour${diffHour > 1 ? "s" : ""} ago`;
    } else if (diffMin > 0) {
      return `${diffMin} minute${diffMin > 1 ? "s" : ""} ago`;
    } else {
      return `${diffSec} second${diffSec !== 1 ? "s" : ""} ago`;
    }
  }

  const handleClassName = (kind, class1, class2) => {
    if (kind === "youtube#video") return class1;
    else return class2;
  };

  const getHistory = () => {
    if (
      list
    ) {
      list.push({
        videoId: videoId,
        videoTitle: videoTitle,
        channelImage: channelImage,
        channelName: channelName,
      });
    }
  };

  const API_KEY = "AIzaSyDDFpUtLlbNY4sDd3LisU1YDObFSHFKOFk";

  const [videoId, setVideoId] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [channelImage, setChannelImage] = useState("");
  const [channelName, setChannelName] = useState("");
  const [viewCount, setViewCount] = useState("");
  const [style, setStyle] = useState("none");
  const [searchText, setSearchText] = useState("");
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [searchData, setSearchData] = useState([]);


  getHistory();
  const [likeCount, setLikeCount] = useState("");
  const maxLength = 40;

  useEffect(() => {
    const stateData = localStorage.getItem('states')
    const stateValues = JSON.parse(stateData)
    setVideoId(stateValues.videoId)
    setVideoTitle(stateValues.videoTitle)
    setChannelImage(stateValues.channelImage)
    setChannelName(stateValues.channelName)
    setViewCount(stateValues.viewCount)
    setSearchQuery(stateValues.searchQuery)
    setSearchText(stateValues.searchText)
    setStyle(stateValues.style)
    setTag(stateValues.tag)
    setData(stateValues.data)
    setList(stateValues.list)
    setQuery(stateValues.query)
  }, [])

  useEffect(() => {
    const stateValues = {
      videoId,
      videoTitle,
      channelImage,
      channelName,
      viewCount,
      style,
      searchText,
      query,
      tag,
      searchQuery,
      data,
      list,
      searchData,
    };

    localStorage.setItem('states', JSON.stringify(stateValues));
  })

  return (
    <AppContext.Provider
      value={{
        videoId,
        kFormatter,
        setVideoId,
        setVideoTitle,
        setChannelImage,
        setChannelName,
        setViewCount,
        videoTitle,
        channelImage,
        viewCount,
        channelName,
        style,
        setStyle,
        searchText,
        setSearchText,
        formatDuration,
        getTimeDiffString,
        API_KEY,
        query,
        setQuery,
        data,
        setData,
        maxLength,
        likeCount,
        setLikeCount,
        handleClassName,
        searchQuery,
        setSearchQuery,
        formatWholeDuration,
        tag,
        setTag,
        list,
        setList,
        searchData,
        setSearchData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default StateContextProvider;
