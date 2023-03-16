import React, { useState, useContext } from "react";
import { AppContext } from "./stateProvider";
const VideoPlayer = () => {
  const { videoId, videoTitle, channelImage, channelName, viewCount } =
    useContext(AppContext);
  const [sub, setSub] = useState("Subscribe");
  const [iconValue, setIconValue] = useState("notifications");

  return (
    <div className="video-player-section">
      <iframe
        className="video-player"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="Watch Youtube Video"
        frameBorder="0"
        allowFullScreen
        allow="autoplay"
      ></iframe>
      <div
        style={{
          paddingLeft: "1rem",
        }}
      >
        <h1 className="video-title">{videoTitle}</h1>
        <div className="player-details">
          <img className="channel-image" src={channelImage} alt={channelName} />
          <div>
            <h2 className="channel-name">{channelName} </h2>
            <p
              style={{
                color: "#fff",
              }}
            >
              {viewCount} views
            </p>
          </div>
          <div className="sub-btn">
            <span class="material-symbols-outlined icons">{iconValue}</span>
            <h2
              className="sub"
              onClick={() => {
                if (sub === "Subscribe") {
                  setSub("Subscribed");
                  setIconValue("notifications_active");
                } else {
                  setSub("Subscribe");
                  setIconValue("notifications");
                }
              }}
            >
              {sub}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
