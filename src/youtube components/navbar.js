import React, {useContext} from "react";
import logoImage from "../Images/logo.png";
import menu from "../Images/menubar.png";
import mic from "../Images/mic.png";
import profile from "../Images/daniel.JPG";
import { Link } from "react-router-dom";
import { AppContext } from "./stateProvider";

const Navbar = () => {

  const {
    searchText,
    setSearchText,
    setVideoId,
    setVideoTitle,
    setChannelImage,
    setChannelName,
    setViewCount,
    setSearchQuery,
    setTag
  } = useContext(AppContext);

  const navbar = {
    width: "100vw",
    padding: ".5rem 1.3vw",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#0f0f0f",
    zIndex: "1",
  };

  const logoName = {
    color: "white",
    fontSize: "1.1rem",
    letterSpacing: "-1px",
    position: "relative",
  };

  const navbarLeft = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const logo = {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  };

  const searchInput = {
    width: "100%",
    height: "40px",
    borderTopLeftRadius: "1.5rem",
    borderBottomLeftRadius: "1.5rem",
    padding: "1rem",
    border: "none",
    backgroundColor: "#0f0f0f",
    outline: "none",
    fontSize: "1.1rem",
    color: "#FFFFFF",
  };

  const searchBox = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222222",
    borderRadius: "1.5rem",
    border: "1px solid #222222",
  };

  const navbarRight = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const handleChange = (e) => {
    setSearchText(e.target.value)
    setSearchQuery('')
  }

  const HandleSearch = (text) => {
    if (text !== "") {
      setVideoId("");
      setVideoTitle("");
      setChannelImage("");
      setChannelName("");
      setViewCount("");
      setSearchQuery(text);
    }

  }

  return (
    <div style={navbar}>
      <div style={navbarLeft}>
        <img src={menu} alt="" className="btn hamburger" />
        <Link to="/" onClick={() => setTag('')} style={logo}>
          <img src={logoImage} alt="" className="logo-image" />
          <h2 style={logoName}>
            YouTube <span className="span">NG</span>
          </h2>
        </Link>
      </div>

      <div className="search">
        <div style={searchBox}>
          <input
            onChange={handleChange}
            type="text"
            value={searchText}
            placeholder="Search"
            style={searchInput}
          />
          <Link
            onClick={() => {
              HandleSearch(searchText)
            }}
            to={searchText !== '' ? `search` : null}
            className="material-symbols-outlined search-icon"
          >
            search
          </Link>
        </div>
        <img src={mic} alt="" className="mic" />
      </div>
      <div style={navbarRight}>
        <span className="material-symbols-outlined btn icons navbar-icon">
          video_call
        </span>
        <span className="material-symbols-outlined mobile-search-icon">
          search
        </span>
        <div>
          <span className="material-symbols-outlined btn icons navbar-icon">
            notifications
          </span>
        </div>
        <img src={profile} alt="" className="btn profile" />
      </div>
    </div>
  );
};

export default Navbar;
