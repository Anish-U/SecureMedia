import Share from "../share/Share";
import Post from "../post/Post";

import "./feedBar.css";

import { useState, useEffect, useContext } from "react";
import axios from "axios";

import { AuthContext } from "../../contexts/AuthContext";

const FeedBar = ({ username }) => {
  const apiURL = process.env.REACT_APP_API_URL;
  const [posts, setPosts] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`${apiURL}post/user/${username}`)
        : await axios.get(`${apiURL}post/timeline/${user._id}`);
      console.log(res.data);
      setPosts(res.data);
    };
    fetchPosts();
  }, [username, user]);

  return (
    <div className="feedBar">
      <div className="feedBarWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default FeedBar;
