import {useContext, useState, useEffect} from 'react'
import { AppContext } from "../stateProvider";
import ChannelVideos from './channelvideos'

const Channel = () => {
  const [data, setData] = useState([])
  const {API_KEY, query} = useContext(AppContext)

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setData(data.items));
  }, [query, setData, API_KEY]);


    return (
      <div style={{height: '67.5vh'}}>
        <div className='channel-header'>
          <h1>{query}</h1>
          <p>20M Subscribers</p>
        </div>
        <div className="home">
          {query ?
            data?.map((data) => (
              <ChannelVideos
                key={data.id}
                id={data.id}
                data={data.snippet}
                thumbnail={data.snippet.thumbnails.medium.url}
              />
            )): null}
        </div>
      </div>
    );
}

export default Channel