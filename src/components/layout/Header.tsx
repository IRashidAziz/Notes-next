import React from "react";
import css from "@/styles/Header.module.css";
import Navbar from "./Navbar";
import Button from "../ui/Button";

const Header = () => {
  return (
    <header className={`${css.header}`}>
      <div className={`${css.logo}`}>FlashNotes</div>
      <Navbar />
      <div className={`${css.last_header_item}`}>
        <div className={`${css.demo}`}>Watch demo</div>
        <Button>Sign Up</Button>
      </div>
    </header>
  );
};

export default Header;
