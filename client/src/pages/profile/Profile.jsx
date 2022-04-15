import "./profile.css";
import NavBar from "../../components/navBar/NavBar";
import LeftBar from "../../components/leftBar/LeftBar";
import FeedBar from "../../components/feedBar/FeedBar";
import RightBar from "../../components/rightBar/RightBar";

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <NavBar />
      <div className="profile">
        <LeftBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={`${PF}images/post.jpeg`}
                alt=""
              />
              <img
                className="profileUserImg"
                src={`${PF}images/avatars/male/male1.png`}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Safak Kocaoglu</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <FeedBar />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
