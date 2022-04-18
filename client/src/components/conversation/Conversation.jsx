import "./conversation.css";

const Conversation = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="conversation">
      <img
        src={PF + "avatars/noAvatar.png"}
        alt=""
        className="conversationImg"
      />
      <span className="conversationName">John Doe</span>
    </div>
  );
};

export default Conversation;
