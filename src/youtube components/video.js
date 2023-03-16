import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./stateProvider";

const Video = ({ data, stats, thumbnail, id }) => {
  const {
    setVideoId,
    // videoId,
    setVideoTitle,
    setChannelImage,
    setChannelName,
    setViewCount,
  } = useContext(AppContext);
  const [style, setStyle] = useState("none");

  function kFormatter(num) {
    if (Math.abs(num) > 999 && Math.abs(num) < 999999) {
      return Math.sign(num) * (Math.abs(num) / 1000).toFixed(0) + "k";
    } else if (Math.abs(num) > 999999 && !(Math.abs(num) < 999999))
      return Math.sign(num) * (num / 1000000).toFixed(1) + "M";
    else return Math.sign(num) * Math.abs(num);
  }

  // const id = useParams()

  // const videoContainer = {
  //   width: "250px",
  //   display: "flex",
  //   margin: "0 5px 3rem 10px",
  //   flexDirection: "column",
  //   position: "relative",
  // };

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
      }}
    >
      <Link
        to={`playvideo`}
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
          34:12
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
          <Link to={`playvideo`}>
            <img style={channelImage} src={thumbnail} alt="" />
          </Link>
        </div>
        <Link
          to={`playvideo`}
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
              // height: "32px",
              // overflowY: "hidden",
            }}
          >
            {data.title}
          </p>
          <div className="channel-details">
            <p className="channel-title">{data.channelTitle}</p>
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
              {/* <p>{stats.viewCount} views</p> */}
              {/* <p>{data.publishedAt}</p> */}
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
              if (option.display === "none") setStyle("block");
              else setStyle("none");
            }}
          >
            more_vert
          </span>
          <div>
            <Link style={option} className="option">
              <span className="material-symbols-outlined icons">schedule</span>
              <p>Watch Later</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
