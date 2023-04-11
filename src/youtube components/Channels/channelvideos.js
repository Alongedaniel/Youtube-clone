import {useState, useContext } from "react";
import { AppContext } from "../stateProvider";
import { Link } from "react-router-dom";

const ChannelVideos = ({ data, thumbnail, id }) => {
    const {
      setVideoId,
      setVideoTitle,
      setChannelImage,
      setChannelName,
      getTimeDiffString,
      maxLength,
        setQuery,
      handleClassName
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
        className={handleClassName(id.kind, "video-container", 'hidden')}
        onClick={() => {
          setVideoId(id);
          setVideoTitle(data.title);
          setChannelImage(thumbnail);
          setChannelName(data.channelTitle);
          setQuery(data.channelTitle);
        }}
      >
        <Link
          to={`/playvideo/${id.videoId}`}
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
            10:40
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
            <Link to={`video/playvideo`}>
              <img style={channelImage} src={thumbnail} alt="" />
            </Link>
          </div>
          <Link
            to={`video/playvideo`}
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
              {data.title.length > maxLength
                ? data.title.slice(0, maxLength) + "..."
                : data.title}
            </p>
            <div className="channel-details">
              <Link to="fvf" className="channel-title">
                {data.channelTitle}
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
                <p className="view-count">20M views</p>
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
                <span className="material-symbols-outlined icons">
                  schedule
                </span>
                <p>History</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ChannelVideos