import React, { useContext} from "react";
import { Tags } from "./data";
import { AppContext } from "./stateProvider";

const Topbar = () => {
  const { setTag } = useContext(AppContext)
  return (
    <div className="topbar">
      {Tags.map((item) => (
        <p onClick={() => {
          setTag(item.name)
        }} className="topbar-item">{item.name}</p>
          ))}
          </div>
  );
};

export default Topbar;
