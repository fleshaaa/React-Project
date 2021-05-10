import React from "react";

import { Logo } from "./Logo/Logo.jsx";
import { NavBar } from "./NavBar/NavBar.jsx";
import { Search } from "./Search/Search.jsx";
import { Contact } from "./Contact/Contact.jsx";
import { Theme } from "./Theme/Theme.jsx";
import { User } from "./User/User.jsx";

import "./header.css";

export const Header = ({isLoggetIn}) => {
  return (
    <div className="header-holder">
      <div className="header">
        <Logo />
        <NavBar />
        <Search />
        <Contact />
        <Theme />
        <User isLoggetIn={isLoggetIn}/>
      </div>
    </div>
  );
};
