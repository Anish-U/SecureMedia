import "./message.css";

import { format } from "timeago.js";
import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

const Message = ({ message, own, friend }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        {!own && (
          <img
            className="messageImg"
            src={
              friend?.profilePicture
                ? PF + friend?.profilePicture
                : PF + "avatars/noAvatar.png"
            }
            alt=""
          />
        )}
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">
        {!own && <span>{friend?.username}</span>}
        {format(message.createdAt)}
      </div>
    </div>
  );
};

export default Message;
