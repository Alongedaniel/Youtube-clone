import React from "react";
// import { AppContext } from "./stateProvider";
import Video from "./video";
import Loading from "./loading";
import { videoData } from "./data";
import useFetch from "./fetch";

const Home = () => {
  // const API_KEY = "AIzaSyCVdxK0Kdm37l4Qu1uMjPPrkuqR6loPi4k";

  const { itemData, isFetched, error, isLoading } = useFetch(
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=AIzaSyDEiEN4yyidHTdgQa7b9AR1_TEeQ1Ng9TM"
  );

  // console.log(itemData.item)

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isFetched &&
        itemData.item.map((data) => (
          <Video
            key={data.id}
            id={data.id}
            data={data.snippet}
            stats={data.statistics}
            thumbnail={data.snippet.thumbnails.medium.url}
          />
        ))}
      {isLoading && videoData.map((data) => <Loading />)}
    </div>
  );
};

export default Home;
