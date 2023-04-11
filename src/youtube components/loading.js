import React from "react";

const Loading = () => {
  const LoadingContainer = {
    width: "230px",
    display: "flex",
    margin: "0 5px 3rem 10px",
    flexDirection: "column",
    position: "relative",
  };

  const thumbnailImage = {
    width: "230px",
    height: "150px",
    borderRadius: ".8rem",
    marginBottom: "10px",
    position: "relative",
    backgroundColor: "#272727",
  };

  const channelImage = {
    width: "40px",
    height: "40px",
    borderRadius: "100%",
    marginRight: "10px",
    backgroundColor: "#272727",
  };
  return (
    <div className="loading" style={LoadingContainer}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <div style={thumbnailImage}></div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <div>
          <div style={channelImage}></div>
        </div>
        <div>
          <p
            style={{
              color: "white",
              fontSize: "0.9rem",
              fontWeight: "500",
              width: "170px",
              overflow: "hidden",
              backgroundColor: "#272727",
              borderRadius: "1rem",
              height: "30px",
            }}
          ></p>
          <p
            style={{
              color: "#717171",
              margin: "5px 0",

              fontSize: "0.9rem",
              display: "flex",
              backgroundColor: "#272727",
            }}
          ></p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#717171",
              fontSize: "0.9rem",
            }}
          >
            <p></p>
            {/* <p>{stats.viewCount} views</p> */}
            {/* <p>{data.publishedAt}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
