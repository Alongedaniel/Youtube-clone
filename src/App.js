import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./youtube components/navbar";
import Sidebar from "./youtube components/sidebar";
import Home from "./youtube components/home";
import Topbar from "./youtube components/topbar";
import Shorts from "./youtube components/shorts";
import VideoPlayer from "./youtube components/videoPlayer";
import JJOlatunji from "./youtube components/Channels/channel";
import MobileSidebar from "./youtube components/mobileSidebar";
import MobileBottomNav from "./youtube components/MobileNav";
// import Video from "./youtube components/video";

const App = () => {
  return (
    <Router>
      <div
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <Navbar />
        <div
          style={{
            display: "flex",
          }}
        >
          <div>
            <Sidebar />
            <MobileSidebar />
          </div>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div className="main">
                  <Topbar />
                  <Home />
                </div>
              }
            />
            <Route exact path="shorts" element={<Shorts />} />
            <Route path={`playvideo/`} element={<VideoPlayer />} />
            <Route
              path="jjchannel"
              element={
                <div className="main">
                  <Topbar />
                  <JJOlatunji />
                </div>
              }
            />
          </Routes>
        </div>
        <MobileBottomNav />
      </div>
    </Router>
  );
};

export default App;
