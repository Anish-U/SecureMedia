import "./share.css";
import { Label, PermMedia, Room, EmojiEmotions } from "@material-ui/icons";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="/assets/images/avatars/male/male1.png"
            alt=""
            className="shareProfileImg"
          />
          <input className="shareInput" placeholder="What's in your mind ?" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia
                htmlColor="lightgreen"
                className="shareIcon"
              ></PermMedia>
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="red" className="shareIcon"></Label>
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="blue" className="shareIcon"></Room>
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions
                htmlColor="goldenrod"
                className="shareIcon"
              ></EmojiEmotions>
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
