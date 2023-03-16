import useFetch from "../fetch";
import { videoData } from "../data";
import Video from "../video";
import Loading from "../loading";

const JJOlatunji = () => {
    const { itemData, error, isFetched, isLoading } = useFetch(
      "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCGmnsW623G1r-Chmo5RB4Yw&maxResults=50&key=AIzaSyDEiEN4yyidHTdgQa7b9AR1_TEeQ1Ng9TM"
    );
    const stats = {
        viewCount: 200
    }
    console.log('item', itemData.item)
    return (
      <div>
        {error && <div style={{ color: "red", fontSize: "2rem" }}>{error}</div>}
        <div className="home" style={{height: '82vh'}}>
          {isFetched &&
            itemData.item.map((data) => (
              <Video
                key={data.id}
                id={data.id}
                data={data.snippet}
                stats={stats.viewCount}
                thumbnail={data.snippet.thumbnails.medium.url}
              />
            ))}
          {isLoading && videoData.map((data) => <Loading />)}
        </div>
      </div>
    );
}

export default JJOlatunji