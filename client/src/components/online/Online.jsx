import "./online.css";

const Online = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="rightBarFriend">
      <div className="rightBarProfileImgContainer">
        <img
          className="rightBarProfileImg"
          src={PF + "avatars/group/group3.png"}
          alt=""
        />
        <span className="rightBarOnline"></span>
      </div>
      <span className="rightBarUsername">Safax</span>
    </li>
  );
};

export default Online;
