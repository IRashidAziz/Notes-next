import React from "react";
import css from "@/styles/SidebarItems.module.css";
import { GoHomeFill } from "react-icons/go";
import { FaNoteSticky } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

type Json = {
  title: string;
  options: Record<string, { icon: string; title: string; href: string }>;
};
const SidebarItems = ({ json }: { json: Json }) => {
  const { title, options } = json;
  return (
    <div className={css.items}>
      <div className={css.category}>{title}</div>
      <div className={css.startitems}>
        {Object.entries(options).map(([key, item]) => (
          <div className="item" key={key}>
            <div className={css.item}>
              <span className={css.icons}>
                {item.icon === "Home" ? (
                  <GoHomeFill
                    color="#c1c2cb"
                    size={25}
                    suppressHydrationWarning
                  />
                ) : item.icon === "Notes" ? (
                  <FaNoteSticky
                    color="#c1c2cb"
                    size={25}
                    suppressHydrationWarning
                  />
                ) : item.icon === "Tasks" ? (
                  <FaTasks color="#c1c2cb" size={25} suppressHydrationWarning />
                ) : item.icon === "Settings" ? (
                  <IoMdSettings
                    color="#c1c2cb"
                    size={27}
                    suppressHydrationWarning
                  />
                ) : (
                  ""
                )}
              </span>
              <span className={css.text}>{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarItems;
