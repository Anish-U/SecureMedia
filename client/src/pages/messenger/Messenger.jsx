import "./messenger.css";

import { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";

import NavBar from "../../components/navBar/NavBar";
import Conversation from "../../components/conversation/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { AuthContext } from "../../contexts/AuthContext";

const Messenger = () => {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [friend, setFriend] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [allFriends, setAllFriends] = useState([]);
  const [selectFriend, setSelectFriend] = useState(null);

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
        const res = await axios.get(`${apiURL}conversation/${user?._id}`);
        // console.log(res.data);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user, apiURL]);

  useEffect(() => {
    const getFriend = async (friendId) => {
      try {
        const res = await axios.get(`${apiURL}user?userId=${friendId}`);
        // console.log(res.data);
        setFriend(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    const getMessages = async () => {
      try {
        const res = await axios.get(`${apiURL}message/${currentChat?._id}`);
        // console.log(res.data);
        setMessages(res.data);

        getFriend(currentChat.members.find((m) => m !== user?._id));
      } catch (err) {
        console.log(err);
      }
    };

    getMessages();
  }, [currentChat, apiURL, user]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const res = await axios.get(`${apiURL}user/friends/${user?._id}`);
        console.log(res.data);
        setAllFriends(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, []);

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

  useEffect(() => {
    const openConversation = async () => {
      try {
        const res = await axios.get(
          `${apiURL}conversation/${user?._id}/${selectFriend?._id}`
        );
        if (res.data.length) {
          setCurrentChat(res.data[0]);
        } else {
          const conversation = {
            senderId: user._id,
            receiverId: selectFriend._id,
          };
          const res = await axios.post(`${apiURL}conversation`, conversation);
          setConversations([...conversations, res.data]);
          setCurrentChat(res.data);
          console.log(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    openConversation();
  }, [selectFriend, user, apiURL, conversations]);

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
                />
              </div>
            ))}
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
                        <Message
                          message={m}
                          own={m.sender === user._id}
                          friend={friend}
                        />
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
            {allFriends.map((friend) => (
              <div onClick={(e) => setSelectFriend(friend)}>
                <ChatOnline user={friend} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
