import React, {useContext} from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./youtube components/navbar";
import Sidebar from "./youtube components/sidebar";
import Home from "./youtube components/home";
import Topbar from "./youtube components/topbar";
import Shorts from "./youtube components/shorts";
import VideoPlayer from "./youtube components/videoPlayer";
import Channel from "./youtube components/Channels/channel";
import MobileSidebar from "./youtube components/mobileSidebar";
import MobileBottomNav from "./youtube components/MobileNav";
import Search from "./youtube components/Search";
import { AppContext } from "./youtube components/stateProvider";
// import Video from "./youtube components/video";
import Tags from "./youtube components/tags";
import History from './youtube components/history'

const App = () => {
  const location = useLocation();
  const {tag} = useContext(AppContext)
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Navbar />
      <div>
        <div
          style={{
            display: "flex",
          }}
        >
          {location.pathname.includes(`playvideo`) ? null : (
            <div>
              <Sidebar />
              <MobileSidebar />
            </div>
          )}
          <Routes>
            <Route
              path="/"
              element={
                <div className="main">
                  <Topbar />
                  
                  {tag === '' ? <Home /> : <Tags />}
                </div>
              }
            />
            <Route exact path="shorts" element={<Shorts />} />
            <Route path={`playvideo/:id`} element={<VideoPlayer />} />
            <Route path={`:id/:id/playvideo/:id`} element={<VideoPlayer />} />
            <Route path={`:id/playvideo/:id`} element={<VideoPlayer />} />
            <Route path={`search/:id`} element={<Search />} />
            <Route path={`search`} element={<Search />} />
            <Route path={`:id/channel/:id`} element={<Channel />} />
            <Route path={`channel/:id`} element={<Channel />} />
            <Route path={`channel`} element={<Channel />} />
            <Route path={`history`} element={<History />} />
          </Routes>
        </div>
      </div>

      <MobileBottomNav />
    </div>
  );
};

export default App;
