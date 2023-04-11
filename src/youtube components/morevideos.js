import { useContext, useEffect } from "react";
import { AppContext } from "./stateProvider";
const MoreVideos = () => {
  const {
    query,
    setVideoId,
    setVideoTitle,
    setChannelImage,
    setChannelName,
    API_KEY,
    videoId,
    maxLength,
    handleClassName,
    searchData, setSearchData
  } = useContext(AppContext);

  
  useEffect(() => {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=18&relatedToVideoId=${videoId}&type=video&key=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setSearchData(data.items);
        })
        .catch((err) => {
          console.log(err.message);
        });
  }, [videoId, API_KEY, setSearchData]);



  return (
    <div className="video-player-bottom-right">
      {query &&
        searchData?.map(
          (item) =>(
              <div
                className={handleClassName(
                  item.id.kind,
                  "more-videos-container",
                  "hidden"
                )}
                onClick={() => {
                  setVideoId(item.id.videoId);
                  setVideoTitle(item.snippet.title);
                  setChannelImage(item.snippet.thumbnails.medium.url);
                  setChannelName(item.snippet.channelTitle);
                }}
                key={item.id.videoId}
              >
                <div>
                  <div className="more-page-right">
                    <img
                      className="more-channel-image"
                      src={item.snippet.thumbnails.medium.url}
                      alt=""
                    />
                    <div className="more-page-text">
                      <h2 className="more-page-title">
                        {item.snippet.title.length > maxLength
                          ? item.snippet.title.slice(0, maxLength) + "..."
                          : item.snippet.title}
                      </h2>
                      <p className="more-page-text-section">
                        {item.snippet.channelTitle}
                      </p>
                      <div className="more-page-text-section">
                        <p>13M views</p>
                        <div className="dot"></div>
                        <p>16 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
    </div>
  );
};

export default MoreVideos;
