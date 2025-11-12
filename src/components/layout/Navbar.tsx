"use client";
import React from "react";
import css from "@/styles/Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(0);
  const items = ["Home", "Features", "About Us", "Contact Us"];
  return (
    <nav>
      <ul className={`${css.nav}`}>
        {items.map((item, index) => (
          <li
            key={index}
            className={`${css.li_items} ${
              active === index ? css.active : css.unactive
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
