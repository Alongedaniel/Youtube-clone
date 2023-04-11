import React, { useContext, useState } from "react";
import {AppContext} from "./stateProvider";
import { Link } from "react-router-dom";

const History = ( ) => {
  const [style, setStyle] = useState("none");

    const {
      list,
        setVideoTitle,
        setVideoId,
    setChannelName,
    maxLength,
    setQuery,
        setChannelImage,
    } = useContext(AppContext);
    


  const option = {
    display: style,
  };

    return (
      <div className="history">
        <h1 className="history-header">History</h1>
        <div className="home">
          {list.map((list) => (
            <Link
              className="video-container"
              onClick={() => {
                setVideoId(list.videoId);
                setVideoTitle(list.title);
                setChannelImage(list.channelImage);
                setChannelName(list.channelTitle);
                setQuery(list.channelTitle);
              }}
              to={`playvideo/watch=${list.videoId}`}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
              >
                <img
                  className="thumbnail-image"
                  src={list.channelImage}
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
                    className="channel-image"
                    src={list.channelImage}
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
                    }}
                  >
                    {list.videoTitle.length > maxLength
                      ? list.videoTitle.slice(0, maxLength) + "..."
                      : list.videoTitle}
                  </p>
                  <div className="channel-details">
                    <Link
                      to={`channel/${list.channelTitle}`}
                      onClick={() => {
                        setQuery(list.channelName);
                        setChannelImage(list.channelImage);
                      }}
                      className="channel-title"
                    >
                      {list.channelName}
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
                          backgroundColor: "#717171",
                          width: "2px",
                          height: "2px",
                          borderRadius: "100%",
                          margin: "0 5px",
                        }}
                      ></p>
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
          ))}
        </div>
      </div>
    );
};

export default History;
