import "./groupMessenger.css";

import { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Delete, Edit } from "@material-ui/icons";

import NavBar from "../../components/navBar/NavBar";
import Conversation from "../../components/conversation/Conversation";
import Message from "../../components/message/Message";
import { AuthContext } from "../../contexts/AuthContext";
import GroupMember from "../../components/groupMember/GroupMember";

const GroupMessenger = () => {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const { user } = useContext(AuthContext);
  const scrollRef = useRef();

  const apiURL = process.env.REACT_APP_API_URL;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(`${apiURL}conversation/group/${user?._id}`);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user, apiURL]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(`${apiURL}message/${currentChat?._id}`);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getMessages();
  }, [currentChat, apiURL, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    try {
      const res = await axios.post(`${apiURL}message/`, message);
      console.log(res.data);
      setMessages([...messages], res.data);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <NavBar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation
                  conversation={c}
                  isCurrent={c === currentChat}
                  currentUser={user}
                  isGroup={true}
                />
              </div>
            ))}
            <Link to="/group/new" style={{ textDecoration: "none" }}>
              <div className="newGroupButton">
                <span> + Create New Group</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages &&
                    messages.map((m) => (
                      <div ref={scrollRef}>
                        <Message message={m} own={m.sender === user._id} />
                      </div>
                    ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    placeholder="Write Something..."
                    className="chatMessageInput"
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <>
                <span className="noConversationText">
                  Open a conversation to start a chat.
                </span>
              </>
            )}
          </div>
        </div>
        <div className="chatOnlineDiv">
          <div className="chatOnlineWrapper">
            {currentChat && (
              <>
                {currentChat?.groupAdmin === user._id && (
                  <div className="chatOptions">
                    {/* <Link
                      to={`/group/edit/${currentChat._id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Edit htmlColor="#3a99d4" />
                    </Link> */}
                    <Link
                      to="/group/delete/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <div className="chatOptionHeading">
                        Delete Group ?<Delete htmlColor="#be1818" />
                      </div>
                    </Link>
                  </div>
                )}
                <div className="members">
                  <span className="membersHeading">Members</span>
                  {currentChat?.members.map((memberId) => (
                    <GroupMember memberId={memberId} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupMessenger;
