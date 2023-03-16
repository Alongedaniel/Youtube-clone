import React from "react";
import logoImage from "../Images/logo.png";
import menu from "../Images/menubar.png";
import mic from "../Images/mic.png";
import profile from "../Images/daniel.JPG";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbar = {
    width: "100vw",
    padding: ".5rem 1.3vw",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#0f0f0f",
    // position: "fixed",
    // width: "100%",
    zIndex: "1",
    // border: "1px solid magenta"
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
    // width: "10%",
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
    gap: "1.4rem",
    backgroundColor: "#222222",
    paddingRight: "2rem",
    borderRadius: "1.5rem",
    border: "1px solid #222222",
  };

  const navbarRight = {
    // width: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  return (
    <div style={navbar}>
      <div style={navbarLeft}>
        <img src={menu} alt="" className="btn hamburger" />
        <Link to="/" style={logo}>
          <img src={logoImage} alt="" className="logo-image" />
          <h2 style={logoName}>
            YouTube <span className="span">NG</span>
          </h2>
        </Link>
      </div>

      <div className="search">
        <div style={searchBox}>
          <input type="text" placeholder="Search" style={searchInput} />
          <span class="material-symbols-outlined search-icon">search</span>
        </div>
        <img src={mic} alt="" className="mic" />
      </div>
      <div style={navbarRight}>
        <span class="material-symbols-outlined btn icons navbar-icon">
          video_call
        </span>
        <span class="material-symbols-outlined mobile-search-icon">search</span>
        <div>
          <span class="material-symbols-outlined btn icons navbar-icon">
            notifications
          </span>
          {/* <span className="num-badge">{0}</span> */}
        </div>
        <img src={profile} alt="" className="btn profile" />
      </div>
    </div>
  );
};

export default Navbar;
