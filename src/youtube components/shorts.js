import React, { useContext } from "react";
import { AppContext } from "./stateProvider";
import Video from "./video";
import axios from "axios";
import { videoData } from "./data";
import Loading from "./loading";
import { useQuery } from "react-query";
import AOS from "aos";
AOS.init()


const Shorts = () => {
  const { API_KEY, formatWholeDuration } = useContext(AppContext);
  const getData = () => {
    return axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${API_KEY}`
    );
  };

  const style = {
    height: '90vh',
  }

  const { data, error, isFetched, isLoading } = useQuery("shorts", getData);
  return (
    <div data-aos="fade-left" style={style} className="home">
      {error && <div className="message">Oops! something went wrong</div>}
      {isFetched &&
        data?.data.items.map((data) =>
          Math.round(formatWholeDuration(data.contentDetails.duration)) <
          Math.round(formatWholeDuration("PT3M00S")) ? (
            <Video
              key={data.id}
              id={data.id}
              details={data.contentDetails}
              data={data.snippet}
              stats={data.statistics}
              thumbnail={data.snippet.thumbnails.medium.url}
            />
          ) : null
        )}
      {isLoading && videoData.map((data) => <Loading />)}
    </div>
  );
};

export default Shorts;
