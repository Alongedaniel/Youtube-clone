import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./stateProvider";

const Video = ({ data, stats, thumbnail, id, details }) => {
  const {
    setVideoId,
    videoId,
    setVideoTitle,
    setChannelImage,
    setChannelName,
    setViewCount,
    kFormatter,
    formatDuration,
    getTimeDiffString,
    maxLength,
    setLikeCount,
    setQuery
  } = useContext(AppContext);
  const [style, setStyle] = useState("none");

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
    <div
      className="video-container"
      onClick={() => {
        setVideoId(id);
        setVideoTitle(data.title);
        setChannelImage(thumbnail);
        setChannelName(data.channelTitle);
        setViewCount(kFormatter(stats.viewCount));
        setLikeCount(kFormatter(stats.likeCount));
        setQuery(data.channelTitle);
      }}
    >
      <Link
        to={`playvideo/watch=${videoId}`}
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <img className="thumbnail-image" src={thumbnail} alt="" />
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
          {formatDuration(details.duration)}
        </p>
      </Link>
      <div
        className="video-details"
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <div>
          <Link to={`playvideo/${videoId}`}>
            <img style={channelImage} src={thumbnail} alt="" />
          </Link>
        </div>
        <Link
          to={`playvideo/${videoId}`}
          style={{
            flex: "1",
            textDecoration: "none",
          }}
        >
          <p
            className="video-title"
            style={{
              color: "white",
              fontSize: "0.9rem",
              fontWeight: "500",
            }}
          >
            {data.title.length > maxLength ? data.title.slice(0, maxLength) + "..." : data.title}
          </p>
          <div className="channel-details">
            <Link to={`channel/${data.channelTitle}`} onClick={() => {
              setQuery(data.channelTitle)
              setChannelImage(thumbnail)
            }} className="channel-title">{data.channelTitle}</Link>
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
              <p className="view-count">{kFormatter(stats.viewCount)} views</p>
              <p
                className="dot"
                style={{
                  backgroundColor: "#717171",
                  width: "2px",
                  height: "2px",
                  borderRadius: "100%",
                  margin: "0 5px",
                }}
              ></p>
              <p className="view-count">
                {getTimeDiffString(new Date(data.publishedAt))}
              </p>
            </div>
          </div>
        </Link>
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
            <Link to={`history`} style={option} className="option">
              <span className="material-symbols-outlined icons">schedule</span>
              <p>History</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
