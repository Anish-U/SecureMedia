import "./navBar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBarContainer">
      <div className="navBarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">SecureMedia</span>
        </Link>
      </div>
      <div className="navBarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friends, posts or videos"
            className="searchInput"
          />
        </div>
      </div>
      <div className="navBarRight">
        <div className="navBarLinks">
          <span className="navBarLink">Home</span>
          <span className="navBarLink">Timeline</span>
        </div>
        <div className="navBarIcons">
          <div className="navBarIconItem">
            <Person />
            <span className="navBarIconBadge">1</span>
          </div>
          <div className="navBarIconItem">
            <Chat />
            <span className="navBarIconBadge">2</span>
          </div>
          <div className="navBarIconItem">
            <Notifications />
            <span className="navBarIconBadge">1</span>
          </div>
        </div>
        <img
          src="/assets/images/avatars/female/female1.png"
          alt=""
          className="navBarImg"
        />
      </div>
    </div>
  );
};

export default NavBar;
