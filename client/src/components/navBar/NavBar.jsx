import "./navBar.css";

import {
  Search,
  Person,
  Chat,
  ExitToApp,
  Settings,
  Home,
  Group,
} from "@material-ui/icons";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

const NavBar = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

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
          <input placeholder="Search for friends" className="searchInput" />
        </div>
      </div>
      <div className="navBarRight">
        <div className="navBarIcons">
          <div className="navBarIconItem">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <Home />
            </Link>
          </div>
          <div className="navBarIconItem">
            <Link
              to="/messenger"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Group />
            </Link>
          </div>
          <div className="navBarIconItem">
            <Link
              to="/messenger"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Chat />
            </Link>
          </div>
          <div className="navBarIconItem">
            <Link
              to="/messenger"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Chat />
            </Link>
          </div>
          <div className="navBarIconItem">
            <Link
              to="/settings"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Settings />
            </Link>
          </div>
          <div className="navBarIconItem">
            <Link
              to="/logout"
              style={{ textDecoration: "none", color: "white" }}
            >
              <ExitToApp />
            </Link>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "avatars/noAvatar.png"
            }
            alt=""
            className="navBarImg"
          />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
