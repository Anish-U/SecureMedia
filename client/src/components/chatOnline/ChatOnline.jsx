import "./chatOnline.css";

const ChatOnline = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            src={PF + "avatars/noAvatar.png"}
            alt=""
            className="chatOnlineImg"
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <div className="chatOnlineName">John Doe</div>
      </div>
    </div>
  );
};

export default ChatOnline;
