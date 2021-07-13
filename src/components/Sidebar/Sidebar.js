import React from "react";
import { Avatar } from "@material-ui/core";
import stars from "../../assets/stars.jpg";
import "./Sidebar.scss";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return (
      <div className="sidebar-recentItem">
        <span className="sidebar-hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="Sidebar">
      <div className="sidebar-top">
        <img src={stars} alt="stars" />
        <Avatar src={user.photoUrl} className="sidebar-avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed you</p>
          <p className="sidebar-statNumber">2,543</p>
        </div>
        <div className="sidebar-stat">
          <p>Views on post</p>
          <p className="sidebar-statNumber">2,443</p>
        </div>
        <div className="sidebar-stat"></div>
      </div>

      <div className="sidebar-bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
      </div>
    </div>
  );
};

export default Sidebar;
