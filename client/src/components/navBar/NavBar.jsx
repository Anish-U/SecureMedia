import "./navBar.css";

import { Search, Person, Chat, ExitToApp, Settings, Group } from "@material-ui/icons";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

const NavBar = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log(user);

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
        <div className="navBarLinks">
          <span className="navBarLink">Home</span>
          <span className="navBarLink">Timeline</span>
        </div>
        <div className="navBarIcons">
          <div className="navBarIconItem">
            <Group />
            <span className="navBarIconBadge">1</span>
          </div>
          <div className="navBarIconItem">
            <Chat />
            <span className="navBarIconBadge">2</span>
          </div>
          <div className="navBarIconItem">
            <Settings />
          </div>
          <div className="navBarIconItem">
            <ExitToApp />
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
