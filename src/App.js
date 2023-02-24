import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./youtube components/navbar";
import Sidebar from "./youtube components/sidebar";
import Home from "./youtube components/home";
import Topbar from "./youtube components/topbar";
import Shorts from "./youtube components/shorts";
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
          </div>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Topbar />
                  <Home />
                </div>
              }
            />
            <Route exact path="shorts" element={<Shorts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
