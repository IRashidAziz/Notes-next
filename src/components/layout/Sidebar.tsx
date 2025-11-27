import React from "react";
import css from "@/styles/Sidebar.module.css";
import { CiSearch } from "react-icons/ci";
import general from "@/constants/general";
import others from "@/constants/others";
import SidebarItems from "../ui/SidebarItems";

const Sidebar = () => {
  return (
    <div className={`${css.sidebar}`}>
      <div className={`${css.logo}`}>FlashNotes</div>
      <form method="get" className={css["search-form"]}>
        <div className={css["search-logo"]}>
          <CiSearch
            size={35}
            className="text-[#c6c6d1]"
            strokeWidth={0.3}
            suppressHydrationWarning
          />
        </div>
        <input
          type="text"
          className={css["search-input"]}
          id="search-input"
          name="query"
          placeholder="Search notes"
        />
      </form>
      <SidebarItems json={general} />
      <SidebarItems json={others} />
    </div>
  );
};

export default Sidebar;
