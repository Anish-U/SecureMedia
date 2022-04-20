import "./message.css";

import { format } from "timeago.js";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

import { AuthContext } from "../../contexts/AuthContext";

const Message = ({ message, own }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const apiURL = process.env.REACT_APP_API_URL;

  const [sender, setSender] = useState(null);

  useEffect(() => {
    const getSender = async () => {
      try {
        const res = await axios.get(`${apiURL}user?userId=${message.sender}`);
        // console.log(res.data);
        setSender(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getSender();
  }, [message, own, apiURL]);

  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        {!own && (
          <img
            className="messageImg"
            src={
              sender?.profilePicture
                ? PF + sender?.profilePicture
                : PF + "avatars/noAvatar.png"
            }
            alt=""
          />
        )}
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">
        {!own && <span>{sender?.username}</span>}
        {format(message.createdAt)}
      </div>
    </div>
  );
};

export default Message;
