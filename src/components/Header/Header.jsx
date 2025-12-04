import React from "react";
import { Link } from "react-router-dom";  

// MUI Icons
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Avatar from "@mui/material/Avatar";

import "./Header.css";
import logo from "../../assets/images/Netflix_2015_logo.svg";
import avatarImg from "../../assets/images/Netflix-avatar.png";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-box">

        {/* LEFT SECTION */}
        <ul className="lists left-list">
          <li className="logo">
            <Link to="/">
              <img src={logo} alt="Netflix Logo" />
            </Link>
          </li>

          <li><Link to="/">Home</Link></li>
          <li><Link to="/shows">Shows</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/games">Games</Link></li>
          <li><Link to="/popular">New & Popular</Link></li>
          <li><Link to="/mylist">My List</Link></li>
          <li><Link to="/languages">Browse by Languages</Link></li>
        </ul>

        {/* RIGHT SECTION */}
        <ul className="lists right-list">
          <li><SearchIcon className="mui-icon" /></li>
          <li><NotificationsNoneIcon className="mui-icon" /></li>
          <li>
            <Avatar 
              src={avatarImg}
              alt="User Avatar"
              className="mui-avatar"
            />
          </li>
        </ul>

      </div>
    </div>
  );
}
