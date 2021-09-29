import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Searchbar } from "../../../UI";
import { ToggleButton } from "../../../UI";
import dashboardRoutes from "../../../../routes";
import { MobileNavbarProps } from "./types";
import { MenuNames } from "../enums";
import avatarSvg from "../../../../assets/navbar-icons/avatar.svg";
import notificationSvg from "../../../../assets/navbar-icons/notification.svg";
import searchSvg from "../../../../assets/navbar-icons/search.svg";
import "./MobileNavbar.scss";

function MobileNavbar({
  transformation,
  setTransformation,
  searchbarOpen,
  toggle,
  mobileNavVisibility,
  setMobileNavVisibility,
  profileDropdownOpen,
  notificationDropdownOpen,
  profileDropdownItems,
  notificationDropdownItems,
  location
}: MobileNavbarProps): JSX.Element {
  let sidebarTransformation;
  if (mobileNavVisibility && transformation) {
    sidebarTransformation = "Mobile-Navbar slide-down";
  }
  if (!transformation && mobileNavVisibility) {
    sidebarTransformation = "Mobile-Navbar slide-down sidebar-transformation";
  }
  if (transformation && document.getElementsByClassName("Mobile-Navbar slide-down").length > 0) {
    sidebarTransformation = "Mobile-Navbar slide-down slide-left";
  }
  return (
    <section className={!mobileNavVisibility ? "Mobile-Navbar" : sidebarTransformation} role="alert" aria-label="Mobile main menu bar dropdown">
      <nav className="Mobile-Navbar__main">
        <div className="Mobile-Navbar__route-name">
          <ul role="listbox" aria-required aria-expanded={mobileNavVisibility}>
            <li
              className="Mobile-Navbar__toggle-item"
              aria-label="Mobile toggle button section"
              onClick={() => {
                setTransformation(!transformation);
              }}
            >
              <ToggleButton dark={true} transformation={transformation} setTransformation={setTransformation} />
            </li>
            <li className="Mobile-Navbar__toggle-item" aria-label="Mobile main menu bar selected route">
              {dashboardRoutes.find((route) => route.path === location)?.name.toUpperCase()}
            </li>
          </ul>
        </div>
        <div className="Mobile-Navbar__space" />
        <Searchbar open={searchbarOpen} toggle={toggle} />
        <div className="Mobile-Navbar__main-items">
          <ul>
            <li className="Mobile-Navbar__main-item">
              <MoreVertIcon
                role="button"
                aria-label="Mobile main menu bar close button"
                onClick={() => setMobileNavVisibility(!mobileNavVisibility)}
                className={transformation ? "Mobile-Nav__btn-icon" : "Mobile-Nav__btn-icon close-slide-down"}
              />
            </li>
          </ul>
        </div>
      </nav>
      <nav>
        <ul className="Mobile-Navbar__items">
          <li className="Mobile-Navbar__item" onClick={() => toggle(MenuNames.Searchbar)} role="button" aria-label="Mobile search bar open button">
            <span className="Mobile-Navbar__item-avatar">
              <Avatar className="search-button" alt="search" src={searchSvg} role="image" aria-label="Search image" />
            </span>
            <span className="Mobile-Navbar__item-text">SEARCH</span>
          </li>
          <li
            className="Mobile-Navbar__item"
            role="button"
            aria-label="Notification menu open button"
            onClick={() => {
              toggle(MenuNames.NotificationDropdown);
            }}
          >
            <span className="Mobile-Navbar__item-avatar">
              <Avatar alt="notification.svg" src={notificationSvg} role="image" aria-label="notification-image" />
            </span>
            <span className="Mobile-Navbar__item-text">Notification</span>
            <span
              className={!notificationDropdownOpen ? "Mobile-Navbar__item-arrow" : "Mobile-Navbar__item-arrow open"}
              aria-label={!notificationDropdownOpen ? `arrow-down` : "arrow-up"}
            >
              <ArrowDropDownIcon />
            </span>
          </li>
          <li
            className={notificationDropdownOpen ? "Mobile-Navbar__item-list open-list" : "Mobile-Navbar__item-list"}
            role="listbox"
            aria-label="Notification listbox"
            aria-required
            aria-expanded={notificationDropdownOpen}
          >
            <ul className="Mobile-Navbar__item-list-container">
              {notificationDropdownItems.map((item, index) => (
                <li key={`item.name:${index}`} className="Mobile-Navbar__item-list-item" onClick={item.action}>
                  {item.name}
                </li>
              ))}
            </ul>
          </li>
          <li
            className="Mobile-Navbar__item"
            onClick={() => {
              toggle(MenuNames.ProfileDropdown);
            }}
            role="button"
            aria-label="User profile menu open button"
          >
            <span className="Mobile-Navbar__item-avatar">
              <Avatar alt="avatar.svg" src={avatarSvg} role="image" aria-label="avatar-image" />
            </span>
            <span className="Mobile-Navbar__item-text">Logout</span>
            <span
              className={!profileDropdownOpen ? "Mobile-Navbar__item-arrow" : "Mobile-Navbar__item-arrow open"}
              aria-label={!profileDropdownOpen ? `arrow-down` : "arrow-up"}
            >
              <ArrowDropDownIcon />
            </span>
          </li>
          <li
            className={profileDropdownOpen ? "Mobile-Navbar__item-list open-list" : "Mobile-Navbar__item-list"}
            role="listbox"
            aria-required
            aria-expanded={profileDropdownOpen}
            aria-label="User profile listbox"
          >
            <ul className="Mobile-Navbar__item-list-container">
              {profileDropdownItems.map((item, index) => (
                <li key={`item.name:${index}`} className="Mobile-Navbar__item-list-item" onClick={item.action}>
                  {item.name}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default MobileNavbar;
