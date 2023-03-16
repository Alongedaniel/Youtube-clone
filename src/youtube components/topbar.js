import React from "react";

const Topbar = () => {
  const topbarItem = {
    padding: "10px",
    margin: "7px 0 7px 10px",
    color: "#fff",
    backgroundColor: "#272727",
    borderRadius: "10px",
    display: "inline",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="topbar">
      <p style={topbarItem}>All</p>
      <p style={topbarItem}>Gaming</p>
      <p style={topbarItem}>ReactionVideos</p>
      <p style={topbarItem}>KSI</p>
      <p style={topbarItem}>Laughter</p>
      <p style={topbarItem}>Punch</p>
      <p style={topbarItem}>Music</p>
      <p style={topbarItem}>Podcasts</p>
      <p style={topbarItem}>Auditions</p>
      <p style={topbarItem}>WeightTraining</p>
      <p style={topbarItem}>Friendship</p>
      <p style={topbarItem}>WebDevelopment</p>
      <p style={topbarItem}>ComputerProgramming</p>
      <p style={topbarItem}>Gadgets</p>
      <p style={topbarItem}>Live</p>
      <p style={topbarItem}>RecentlyUploaded</p>
      <p style={topbarItem}>Watched</p>
      <p style={topbarItem}>Newtoyou</p>
      {/* <p style={topbarItem}>
        FreestyleRap
      </p>
      <p style={topbarItem}>
        FreestyleRap
      </p>
      <p style={topbarItem}>
        FreestyleRap
      </p>
      <p style={topbarItem}>
        FreestyleRap
      </p>
      <p style={topbarItem}>
        FreestyleRap
      </p>
      <p style={topbarItem}>
        FreestyleRap
      </p>
      <p style={topbarItem}>
        FreestyleRap
      </p> */}
    </div>
  );
};

export default Topbar;
