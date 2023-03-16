import shorts from "../Images/shorts.png";
import { Link } from "react-router-dom";

const MobileBottomNav = () => {
  return (
    <div className="mobile-bottom-nav">
      <Link to="/" className=" mobile-bottom-nav-item">
        <span className="material-symbols-rounded mobile-icons">home</span>
        <p>Home</p>
      </Link>
      <Link to="shorts" className=" mobile-bottom-nav-item">
        <img className="icon" src={shorts} alt="" />
        <p>Shorts</p>
      </Link>
      <Link className=" mobile-bottom-nav-item">
        <span className="material-symbols-outlined add-icon">add_circle</span>
      </Link>
      <Link className=" mobile-bottom-nav-item">
        <span className="material-symbols-rounded mobile-icons">
          subscriptions
        </span>
        <p>Subscriptions</p>
      </Link>
      <Link className=" mobile-bottom-nav-item">
        <span className="material-symbols-outlined mobile-icons">
          video_library
        </span>
        <p>Library</p>
      </Link>
    </div>
  );
};

export default MobileBottomNav;
