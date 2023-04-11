import React, { useContext } from "react";
import Video from "./video";
import Loading from "./loading";
import { videoData } from "./data";
import { AppContext } from "./stateProvider";
import { useQuery } from "react-query";
import axios from "axios";
 

const Home = () => {
  const { API_KEY } = useContext(AppContext);

const getData = () => {
  return axios.get(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regonCode=US&key=${API_KEY}`
  );
  };
  
  const { data, isLoading, isFetched, error } = useQuery(
    "video",
    getData,
    {
      cacheTime: 50 * (60 * 1000),
      staleTime: 49 * (60 * 1000)
    }
  );


  return (
    <div className="home">
      {error && <div>Oops! Something went wrong</div>}
      {isFetched &&
        data?.data.items.map(
          (data) => (
              <Video
                key={data.id}
                id={data.id}
                details={data.contentDetails}
                data={data.snippet}
                stats={data.statistics}
                thumbnail={data.snippet.thumbnails.medium.url}
              /> 
            )
        )}
      {isLoading && videoData.map((data) => <Loading />)}
    </div>
  );
};

export default Home;
