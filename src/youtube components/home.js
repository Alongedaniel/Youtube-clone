import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { AppContext } from "./stateProvider";
import Video from "./video";
import Loading from "./loading";
import { videoData } from "./data";
import { uuid } from "uuidv4";

const Home = () => {
  // const API_KEY = "AIzaSyCVdxK0Kdm37l4Qu1uMjPPrkuqR6loPi4k";
  const [itemData, setItemData] = useState([]);
  // const { videoData } = useContext(AppContext);
  const [isFetched, setIsFetched] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=AIzaSyCVdxK0Kdm37l4Qu1uMjPPrkuqR6loPi4k"
    )
      .then((res) => res.json())
      .then((items) => {
        setItemData({ item: items.items, id: uuid });
        setIsFetched(true);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, []);

  return (
    <Link to="video" className="home">
      {error && <div>{error}</div>}
      {isFetched &&
        itemData.item.map((data) => (
          <Video
            data={data.snippet}
            stats={data.statistics}
            thumbnail={data.snippet.thumbnails.medium.url}
            key={data.id}
          />
        ))}
      {isLoading && videoData.map((data) => <Loading />)}
    </Link>
  );
};

export default Home;
