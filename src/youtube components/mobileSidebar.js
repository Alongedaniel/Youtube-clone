import { Link } from "react-router-dom";
import shorts from "../Images/shorts.png";

const MobileSidebar = () => {
  return (
    <div className="mobile-sidebar-section">
      <Link to="/" className="sidebar-item mobile-sidebar-item">
        <span className="material-symbols-rounded icons">home</span>
        <p>Home</p>
      </Link>
      <Link to="shorts" className="sidebar-item mobile-sidebar-item">
        <img className="icon" src={shorts} alt="" />
        <p>Shorts</p>
      </Link>
      <Link className="sidebar-item mobile-sidebar-item">
        <span className="material-symbols-rounded icons">subscriptions</span>
        <p>Subscription</p>
      </Link>
      <Link to={`history`} className="sidebar-item mobile-sidebar-item">
        <span className="material-symbols-outlined icons">history</span>
        <p>History</p>
      </Link>
      <Link className="sidebar-item mobile-sidebar-item">
        <span className="material-symbols-outlined icons">download</span>
        <p>Downloads</p>
      </Link>
    </div>
  );
};

export default MobileSidebar;
