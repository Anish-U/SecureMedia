import "./message.css";

import { format } from "timeago.js";

const Message = ({ message, own }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img className="messageImg" src={PF + "avatars/noAvatar.png"} alt="" />
        <p className="messageText">{"SSSSSSSSSSSS"}</p>
      </div>
      <div className="messageBottom">{"2hrs ago"}</div>
    </div>
  );
};

export default Message;
