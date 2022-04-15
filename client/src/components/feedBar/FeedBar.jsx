import Share from "../share/Share";
import Post from "../post/Post";

import "./feedBar.css";

const feedBar = () => {
  return (
    <div className="feedBar">
      <div className="feedBarWrapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default feedBar;
