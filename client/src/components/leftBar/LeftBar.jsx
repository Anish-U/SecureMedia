import "./leftBar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="leftBarWrapper">
        <ul className="leftBarList">
          <li className="leftBarListItem">
            <RssFeed className="leftBarIcon" />
            <span className="leftBarListItemText">Feed</span>
          </li>
          <li className="leftBarListItem">
            <Chat className="leftBarIcon" />
            <span className="leftBarListItemText">Chats</span>
          </li>
          <li className="leftBarListItem">
            <PlayCircleFilledOutlined className="leftBarIcon" />
            <span className="leftBarListItemText">Videos</span>
          </li>
          <li className="leftBarListItem">
            <Group className="leftBarIcon" />
            <span className="leftBarListItemText">Groups</span>
          </li>
          <li className="leftBarListItem">
            <Bookmark className="leftBarIcon" />
            <span className="leftBarListItemText">Bookmarks</span>
          </li>
          <li className="leftBarListItem">
            <HelpOutline className="leftBarIcon" />
            <span className="leftBarListItemText">Questions</span>
          </li>
          <li className="leftBarListItem">
            <WorkOutline className="leftBarIcon" />
            <span className="leftBarListItemText">Jobs</span>
          </li>
          <li className="leftBarListItem">
            <Event className="leftBarIcon" />
            <span className="leftBarListItemText">Events</span>
          </li>
          <li className="leftBarListItem">
            <School className="leftBarIcon" />
            <span className="leftBarListItemText">Courses</span>
          </li>
        </ul>
        <button className="leftBarButton">Show More</button>
        <hr className="leftBarHr" />
        <ul className="leftBarFriendList">
          <li className="leftBarFriend">
            <img
              src="/assets/images/avatars/female/female1.png"
              alt=""
              className="leftBarFriendImg"
            />
            <span className="leftBarFriendName">Jane Done</span>
          </li>
          <li className="leftBarFriend">
            <img
              src="/assets/images/avatars/female/female1.png"
              alt=""
              className="leftBarFriendImg"
            />
            <span className="leftBarFriendName">Jane Done</span>
          </li>
          <li className="leftBarFriend">
            <img
              src="/assets/images/avatars/female/female1.png"
              alt=""
              className="leftBarFriendImg"
            />
            <span className="leftBarFriendName">Jane Done</span>
          </li>
          <li className="leftBarFriend">
            <img
              src="/assets/images/avatars/female/female1.png"
              alt=""
              className="leftBarFriendImg"
            />
            <span className="leftBarFriendName">Jane Done</span>
          </li>
          <li className="leftBarFriend">
            <img
              src="/assets/images/avatars/female/female1.png"
              alt=""
              className="leftBarFriendImg"
            />
            <span className="leftBarFriendName">Jane Done</span>
          </li>
          <li className="leftBarFriend">
            <img
              src="/assets/images/avatars/female/female1.png"
              alt=""
              className="leftBarFriendImg"
            />
            <span className="leftBarFriendName">Jane Done</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftBar;
