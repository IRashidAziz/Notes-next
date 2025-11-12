import React from "react";
import css from "@/styles/Navbar.module.css";

const Navbar = () => {
  const items = ["Home", "Features", "About Us", "Contact Us"];
  return (
    <nav>
      <ul className={`${css.nav}`}>
        {items.map((item, index) => (
          <li key={index} className={`${css.li_items}`}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
