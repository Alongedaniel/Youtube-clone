import React from "react";


const Video = ({ data, stats, thumbnail, key }) => {

    
    function kFormatter(num) {
        if (Math.abs(num) > 999 && Math.abs(num) < 999999) {
          return Math.sign(num) * (Math.abs(num) / 1000).toFixed(0) + "k";
        } else if (Math.abs(num) > 999999 && !(Math.abs(num) < 999999))
          return Math.sign(num) * (num / 1000000).toFixed(1) + "M";
        else return Math.sign(num) * Math.abs(num);
        //   return Math.abs(num) > 999
        //     ? Math.sign(num) * (Math.abs(num) / 10000).toFixed(0) + "k"
        //     : Math.sign(num) * Math.abs(num);
    }

      const videoContainer = {
        width: "250px",
        display: "flex",
        margin: "0 5px 3rem 10px",
        flexDirection: "column",
          position: "relative",
        
      };

      const thumbnailImage = {
        width: "250px",
        height: "150px",
        borderRadius: ".8rem",
        marginBottom: "10px",
        position: "relative",
      };

      const channelImage = {
        width: "40px",
        height: "40px",
        borderRadius: "100%",
        marginRight: "10px",
      };
    return (
      <div style={videoContainer}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <img style={thumbnailImage} src={thumbnail} alt="" />
          <p
            style={{
              backgroundColor: "rgba(0, 0, 0, .8)",
              padding: ".1rem .3rem",
              position: "absolute",
              fontSize: "12px",
              fontWeight: "700",
              color: "#fff",
              marginBottom: "15px",
              borderRadius: ".3rem",
              marginRight: "8px",
            }}
          >
            34:12
          </p>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          <div>
            <img style={channelImage} src={thumbnail} alt="" />
          </div>
          <div>
            <p
              style={{
                color: "white",
                fontSize: "14px",
                fontWeight: "500",
                width: "200px",
                overflow: "hidden",
              }}
            >
              {data.title}
            </p>
            <p
              style={{
                color: "#717171",
                margin: "5px 0",

                fontSize: "14px",
                display: "flex",
              }}
            >
              {data.channelTitle}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#717171",
                fontSize: "14px",
              }}
            >
              <p>{kFormatter(stats.viewCount)} views</p>
              {/* <p>{stats.viewCount} views</p> */}
              <p
                style={{
                  backgroundColor: "#717171",
                  width: "5px",
                  height: "5px",
                  borderRadius: "100%",
                  margin: "0 5px",
                }}
              ></p>
              {/* <p>{data.publishedAt}</p> */}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Video