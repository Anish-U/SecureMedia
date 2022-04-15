import "./online.css";

const Online = () => {
  return (
    <li className="rightBarFriend">
      <div className="rightBarProfileImgContainer">
        <img
          className="rightBarProfileImg"
          src="/assets/images/avatars/group/group1.png"
          alt=""
        />
        <span className="rightBarOnline"></span>
      </div>
      <span className="rightBarUsername">Safax</span>
    </li>
  );
};

export default Online;
