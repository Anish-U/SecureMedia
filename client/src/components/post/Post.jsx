import "./post.css";

import { MoreVert } from "@material-ui/icons";

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/images/avatars/male/male1.png"
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">Safak</span>
            <span className="postDate">5mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Post Description goes here</span>
          <img className="postImg" src="/assets/images/post.jpeg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/images/heart.png" alt="" className="likeIcon" />
            <span className="postLikeCounter">10 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">15 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
