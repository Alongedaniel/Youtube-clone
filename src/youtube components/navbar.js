import React from "react";
import logoImage from "../Images/logo.png";
import menu from "../Images/menubar.png";
import search_icon from "../Images/search.png";
import mic from "../Images/mic.png";
import create from "../Images/create.png";
import notification from "../Images/notification.png";
import profile from "../Images/profile.png";

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
  };

  const search = {
    display: "flex",
    alignItems: "center",
    gap: ".5rem",
  };

  const logoName = {
    color: "white",
    fontSize: "18px",
    letterSpacing: "-1px",
    position: "relative",
  };

  const navbarLeft = {
    display: "flex",
    alignItems: "center",
    width: "160px",
    justifyContent: "space-between",
  };

  const logo = {
    display: "flex",
    alignItems: "center",
  };

  const searchInput = {
    width: "550px",
    height: "40px",
    borderTopLeftRadius: "1.5rem",
    borderBottomLeftRadius: "1.5rem",
    padding: "1rem",
    border: "none",
    backgroundColor: "#0f0f0f",
    outline: "none",
    fontSize: "18px",
    color: "#FFFFFF",
  };

  const searchBox = {
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
    width: "150px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  return (
    <div style={navbar}>
      <div style={navbarLeft}>
        <img src={menu} alt="" className="btn" />
        <div style={logo}>
          <img src={logoImage} alt="" className="logo-image" />
          <h2 style={logoName}>
            YouTube <span className="span">NG</span>
          </h2>
        </div>
      </div>

      <div style={search}>
        <div style={searchBox}>
          <input type="text" placeholder="Search" style={searchInput} />
          <img src={search_icon} alt="" className="search-icon" />
        </div>
        <img src={mic} alt="" className="mic" />
      </div>
      <div style={navbarRight}>
        <img src={create} alt="" className="btn" />
        <div>
          <img src={notification} alt="" className="btn notification" />
          <span className="num-badge">{0}</span>
        </div>
        <img src={profile} alt="" className="btn profile" />
      </div>
    </div>
  );
};

export default Navbar;
