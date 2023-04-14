import React, { useContext } from "react";
import { AppContext } from "./stateProvider";
import MoreVideos from "./morevideos";
import axios from "axios";
import { useQuery } from "react-query";

const VideoPlayer = () => {
  const { videoId, videoTitle, channelImage, channelName, viewCount, likeCount, API_KEY, maxLength } =
    useContext(AppContext);

  const getData = () => {
    return axios.get(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
    );
  }

  const { data,error } = useQuery("videoplayer", getData, {
    cacheTime: 50 * (60 * 1000),
    staleTime: 49 * (60 * 1000),
  });





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
          marginBottom: "1rem",
        }}
      >
        <h1 className="video-title">
          {videoTitle.length > maxLength
            ? videoTitle.slice(0, maxLength) + "..."
            : videoTitle}
        </h1>
        <div className="player-details">
          <img className="channel-image" src={channelImage} alt={channelName} />
          <div>
            <h2 className="channel-name">{channelName} </h2>
            <p
              style={{
                color: "#fff",
              }}
            >
              {viewCount ? viewCount : "10M"} views
            </p>
          </div>
          <div className="like-count">
            <span class="material-symbols-outlined">thumb_up</span>
            <p>{likeCount ? likeCount : "20K"}</p>
            <p>|</p>
            <span class="material-symbols-outlined">thumb_down</span>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: "#222",
        }}
      />
      <div className="video-player-bottom">
        <div className="comment-container">
          {error ? (
            <p>error loading comments</p>
          ) : (
            data?.data.items.map((item) => (
              <div className="comment-details">
                <img
                  className="channel-image"
                  src={
                    item.snippet.topLevelComment.snippet.authorProfileImageUrl
                  }
                  alt=""
                />
                <div>
                  <div className="comment-author-details">
                    <p className="comment-author-name">
                      {item.snippet.topLevelComment.snippet.authorDisplayName}
                    </p>
                    <p>{item.snippet.topLevelComment.snippet.textOriginal}</p>
                  </div>
                  <div className="comment-like-count-section">
                    <div className="comment-like-count">
                      <span className="material-symbols-outlined">
                        thumb_up
                      </span>
                      <p>{item.snippet.topLevelComment.snippet.likeCount}</p>
                    </div>

                    <span class="material-symbols-outlined">thumb_down</span>
                    <p className="open-replies">
                      {item.snippet.totalReplyCount} replies
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <MoreVideos />
      </div>
    </div>
  );
};

export default VideoPlayer;
