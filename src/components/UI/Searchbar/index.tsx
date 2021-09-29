import React from "react";
import Modal from "../Modal";
import { MenuNames } from "../../../components/DashboardLayout/Navbar/enums";
import { SearchbarProps } from "./types";
import "./Searchbar.scss";
function Searchbar({ open, toggle }: SearchbarProps): JSX.Element {
  return (
    <>
      {open ? <Modal modalCloseFunction={toggle} arg={MenuNames.Searchbar} /> : <></>}
      <div className={!open ? "Searchbar" : "Searchbar slide-down"} aria-label="Search textbox container" role="alert">
        <div className="Searchbar__container">
          <input className="Searchbar__input" type="text" placeholder="SEARCH" aria-label="Search textbox" />
          <button
            className="Searchbar__input-close-button"
            onClick={() => {
              toggle(MenuNames.Searchbar);
            }}
          >
            &times;
          </button>
        </div>
      </div>
    </>
  );
}

export default Searchbar;
