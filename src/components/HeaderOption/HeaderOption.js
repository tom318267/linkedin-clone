import React from "react";
import { Avatar } from "@material-ui/core";
import "./HeaderOption.scss";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="HeaderOption">
      {Icon && <Icon className="header-option-icon" />}
      {avatar && (
        <Avatar className="header-option-icon">{user?.email[0]}</Avatar>
      )}
      <h3 className="header-option-title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
