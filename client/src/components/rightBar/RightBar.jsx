import "./rightBar.css";

import Online from "../online/Online";

const RightBar = ({ user }) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img
            src="/assets/images/birthday.png"
            alt=""
            className="birthdayImg"
          />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have their birthday
            today.
          </span>
        </div>

        <hr className="rightBarHr" />

        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
          <Online />
          <Online />
          <Online />
          <Online />
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightBarTitle">User information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">{user.city || "N/A"}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Gender:</span>
            <span className="rightBarInfoValue">{user.gender || "N/A"}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship:</span>
            <span className="rightBarInfoValue">{user.relationship || "N/A"}</span>
          </div>
        </div>
        <hr className="rightBarHr" />

        <h4 className="rightBarTitle">User friends</h4>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img
              src="/assets/images/avatars/female/female1.png"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">John Carter</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="/assets/images/avatars/female/female2.png"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">John Carter</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="/assets/images/avatars/female/female3.png"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">John Carter</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="/assets/images/avatars/female/female4.png"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">John Carter</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="/assets/images/avatars/female/female5.png"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">John Carter</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="/assets/images/avatars/female/female6.png"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default RightBar;
