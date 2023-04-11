import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./stateProvider";

const Tags = () => {
  const {
    setVideoId,
    videoId,
    setVideoTitle,
    setChannelImage,
    setChannelName,
    maxLength,
      setQuery,
      API_KEY,
      tag,
  } = useContext(AppContext);
    const [style, setStyle] = useState("none");
    
    const [data, setData] = useState([])


  useEffect(() => {
    if (tag !== "") {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${tag}&key=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => setData(data.items));
    }
  }, [tag, API_KEY]);

  const channelImage = {
    width: "40px",
    height: "40px",
    borderRadius: "100%",
    marginRight: "10px",
  };

  const option = {
    display: style,
  };

    return (
      <div className="home">
        {data?.map((item) => (
          item.id.kind === 'youtube#video' ?
          <div
            className="video-container"
            onClick={() => {
              setVideoId(item.id.videoId);
              setVideoTitle(item.snippet.title);
              setChannelImage(item.snippet.thumbnails.medium.url);
              setChannelName(item.snippet.channelTitle);
            }}
          >
            <Link to={`playvideo/watch=${videoId}`} className='tags'>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
              >
                <img
                  className="thumbnail-image"
                  src={item.snippet.thumbnails.medium.url}
                  alt=""
                />
                <p
                  style={{
                    backgroundColor: "rgba(0, 0, 0, .8)",
                    padding: ".1rem .3rem",
                    position: "absolute",
                    fontSize: "0.8rem",
                    fontWeight: "700",
                    color: "#fff",
                    marginBottom: "15px",
                    borderRadius: ".3rem",
                    marginRight: "8px",
                  }}
                >
                  10:50
                </p>
              </div>

              <div
                className="video-details"
                style={{
                  display: "flex",
                  width: "100%",
                }}
              >
                <div>
                  <img
                    style={channelImage}
                    src={item.snippet.thumbnails.medium.url}
                    alt=""
                  />
                </div>
                <div
                  style={{
                    flex: "1",
                  }}
                >
                  <p
                    className="video-title"
                    style={{
                      color: "white",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      // height: "32px",
                      // overflowY: "hidden",
                    }}
                  >
                    {item.snippet.title.length > maxLength
                      ? item.snippet.title.slice(0, maxLength) + "..."
                      : item.snippet.title}
                  </p>
                  <div className="channel-details">
                    <Link
                      to={`channel/${data.channelTitle}`}
                      onClick={() => {
                        setQuery(item.channelTitle);
                        setChannelImage(item.snippet.thumbnails.medium.url);
                      }}
                      className="channel-title"
                    >
                      {item.snippet.channelTitle}
                    </Link>
                    <p
                      className="dot"
                      style={{
                        display: "none",
                        backgroundColor: "#717171",
                        width: "2px",
                        height: "2px",
                        borderRadius: "100%",
                        margin: "0 5px",
                      }}
                    ></p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "#717171",
                        fontSize: "0.9rem",
                        textDecoration: "none",
                      }}
                    >
                      <p className="view-count">10M views</p>
                      <p
                        className="dot"
                        style={{
                          // display: "none",
                          backgroundColor: "#717171",
                          width: "2px",
                          height: "2px",
                          borderRadius: "100%",
                          margin: "0 5px",
                        }}
                      ></p>
                      {/* <p>{stats.viewCount} views</p> */}
                      <p className="view-count">2 hrs ago</p>
                    </div>
                  </div>
                </div>
                <div>
                  <span
                    style={{
                      fontSize: "30px",
                      fontWeight: "700",
                      color: "#fff",
                      cursor: "pointer",
                      position: "relative",
                    }}
                    className="material-symbols-outlined"
                    onClick={() => {
                      if (option.display === "none") setStyle("flex");
                      else setStyle("none");
                    }}
                  >
                    more_vert
                  </span>
                  <div>
                    <div style={option} className="option">
                      <span className="material-symbols-outlined icons">
                        schedule
                      </span>
                      <p>Watch Later</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div> : null
        )) }
      </div>
    );
};

export default Tags;
