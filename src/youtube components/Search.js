import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "./stateProvider";
import { Link } from "react-router-dom";

const Search = () => {
  const {
    searchQuery,
    setVideoId,
    setVideoTitle,
    setChannelImage,
    setChannelName,
    API_KEY,
    maxLength,
    handleClassName,
    setQuery,
  } = useContext(AppContext);

  const [data, setData] = useState([])
  const [error, setError] = useState('')
  
  useEffect(() => {
    if (searchQuery !== '') {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchQuery}&key=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data.items)
        }).catch((err) => {
          setError(err.message)
        })
    }
  }, [searchQuery, API_KEY])


  return (
    <div className="search-page">
      <h1>Search result for: {searchQuery}</h1>
      <div
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: "#222",
          marginBottom: "1rem",
        }}
      />
      {error ? (
        <div className="message">Error loading results</div>
      ) : (
        data?.map((item) => (
          <Link
            className={handleClassName(
              item.id.kind,
              "search-results",
              "center-search-result"
            )}
            onClick={() => {
              setVideoId(item.id.videoId);
              setVideoTitle(item.snippet.title);
              setChannelImage(item.snippet.thumbnails.medium.url);
              setChannelName(item.snippet.channelTitle);
              setQuery(item.snippet.channelTitle);
            }}
            to={
              item.id.kind === "youtube#video"
                ? `playvideo/${item.id.videoId}`
                : `channel/${item.snippet.title}`
            }
            key={item.id.videoId}
          >
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <img
                className={handleClassName(
                  item.id.kind,
                  "search-image",
                  "channel-profile-image"
                )}
                src={item.snippet.thumbnails.medium.url}
                alt=""
              />
              {item.id.kind === "youtube#video" ? (
                <p className="search-video-duration">10:40</p>
              ) : null}
            </div>
            <div className="mobile-search-page">
              <div className="mobile-search-page-bottom">
                {/* <img
                  className="search-channel-image"
                  src={item.snippet.thumbnails.medium.url}
                  alt=""
                /> */}
                <div>
                  <h2 className="search-page-title">
                    {item.snippet.title.length > maxLength
                      ? item.snippet.title.slice(0, maxLength) + "..."
                      : item.snippet.title}
                  </h2>
                  <p>
                    {item.id.kind === "youtube#channel"
                      ? item.snippet.description
                      : null}
                  </p>
                  <div
                    className={handleClassName(
                      item.id.kind,
                      "mobile-search-page-text-section",
                      "hidden"
                    )}
                  >
                    <Link style={{textDecoration: 'none', color: '#717171'}} to={`channel/${item.snippet.channelTitle}`}>
                      {item.snippet.channelTitle}
                    </Link>
                    <div className="dot"></div>
                    <p>3.2M views</p>
                    <div className="dot"></div>
                    <p>16 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="search-page-text-section">
              <h2 className="search-page-title">
                {item.snippet.title.length > maxLength
                  ? item.snippet.title.slice(0, maxLength) + "..."
                  : item.snippet.title}
              </h2>
              <div
                className={handleClassName(
                  item.id.kind,
                  "search-page-content-details",
                  "hidden"
                )}
              >
                <p>3.2M views</p>
                <div className="dot"></div>
                <p>16 hours ago</p>
              </div>
              <Link
                to={`channel/${item.snippet.channelTitle}`}
                onClick={() => {
                  setQuery(item.snippet.channelId);
                  setChannelImage(
                    item.id.kind === "youtube#channel"
                      ? item.snippet.thumbnails.medium.url
                      : null
                  );
                }}
                className={handleClassName(
                  item.id.kind,
                  "search-page-channel-details",
                  "hidden"
                )}
              >
                <img
                  className="search-channel-image"
                  src={item.snippet.thumbnails.medium.url}
                  alt=""
                />
                <p style={{ color: "#717171" }}>{item.snippet.channelTitle}</p>
              </Link>
              <p className="video-description">{item.snippet.description}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Search;
