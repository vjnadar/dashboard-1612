import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ToggleButton } from "../../UI";
import { Dropdown } from "../../UI";
import Avatar from "@material-ui/core/Avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Searchbar } from "../../UI";
import MobileNavbar from "./MobileNavbar";
import { profileDropdownItems, notificationDropdownItems } from "./data";
import dashboardRoutes from "../../../routes";
import { NavbarProps } from "./types";
import { MenuNames } from "./enums";
import avatarSvg from "../../../assets/navbar-icons/avatar.svg";
import notificationSvg from "../../../assets/navbar-icons/notification.svg";
import searchSvg from "../../../assets/navbar-icons/search.svg";

import "./Navbar.scss";

function Navbar({ transformation, setTransformation, mobileView, location }: NavbarProps): JSX.Element {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationDropdownOpen, setNotificationDropdownOpen] = useState(false);
  const [searchbarOpen, setSearchOpen] = useState(false);
  const [mobileNavVisibility, setMobileNavVisibility] = useState(false);
  useEffect(() => {
    setProfileDropdownOpen(false);
    setNotificationDropdownOpen(false);
    setMobileNavVisibility(false);
    setSearchOpen(false);
  }, [mobileView]);
  function toggle(segmentName: string) {
    if (segmentName === MenuNames.ProfileDropdown) {
      if (notificationDropdownOpen) {
        setNotificationDropdownOpen(false);
      }
      setProfileDropdownOpen(!profileDropdownOpen);
    } else if (segmentName === MenuNames.NotificationDropdown) {
      if (profileDropdownOpen) {
        setProfileDropdownOpen(false);
      }
      setNotificationDropdownOpen(!notificationDropdownOpen);
    } else {
      if (notificationDropdownOpen) {
        setNotificationDropdownOpen(false);
      }
      if (profileDropdownOpen) {
        setProfileDropdownOpen(false);
      }
      setSearchOpen(!searchbarOpen);
    }
  }
  return (
    <>
      <nav className={mobileNavVisibility && !transformation ? "Navbar moved" : "Navbar"} aria-label="Main menu bar">
        {!mobileNavVisibility ? (
          <section className="Navbar__route">
            <ul>
              <li className="Navbar__toggle-item" aria-label="Toggle button section">
                <ToggleButton transformation={transformation} setTransformation={setTransformation} />
              </li>
              <li className="Navbar__toggle-item" aria-label="Selected route">
                {dashboardRoutes.find((route) => route.path === location)?.name.toUpperCase()}
              </li>
            </ul>
          </section>
        ) : (
          <></>
        )}
        <div className="Navbar__space" />
        {!mobileView ? (
          <Searchbar open={searchbarOpen} toggle={toggle} />
        ) : (
          <MobileNavbar
            transformation={transformation}
            setTransformation={setTransformation}
            searchbarOpen={searchbarOpen}
            toggle={toggle}
            mobileNavVisibility={mobileNavVisibility}
            setMobileNavVisibility={setMobileNavVisibility}
            profileDropdownOpen={profileDropdownOpen}
            notificationDropdownOpen={notificationDropdownOpen}
            profileDropdownItems={profileDropdownItems}
            notificationDropdownItems={notificationDropdownItems}
            location={location}
          />
        )}
        <section className="Navbar__items">
          {!mobileView ? (
            <ul>
              <li className="Navbar__item" aria-label="Search bar open button">
                <Avatar
                  role="button"
                  aria-label="Search button"
                  className="Navbar__item-search-button"
                  alt="search.svg"
                  src={searchSvg}
                  onClick={() => toggle("SEARCH_BAR")}
                />
              </li>
              <li className="Navbar__item" role="listbox" aria-label="Notification dropdown" aria-required aria-expanded={notificationDropdownOpen}>
                <Dropdown
                  dropdownItems={notificationDropdownItems}
                  open={notificationDropdownOpen}
                  setOpen={toggle}
                  dropdownName={MenuNames.NotificationDropdown}
                  avatarImgSrc={notificationSvg}
                  large={true}
                />
              </li>
              <li className="Navbar__item" role="listbox" aria-label="User profile dropdown" aria-required aria-expanded={profileDropdownOpen}>
                <Dropdown
                  dropdownItems={profileDropdownItems}
                  open={profileDropdownOpen}
                  setOpen={toggle}
                  dropdownName={MenuNames.ProfileDropdown}
                  avatarImgSrc={avatarSvg}
                />
              </li>
            </ul>
          ) : (
            <ul>
              <li
                className="Navbar__item toggle-mobile-navbar"
                role="button"
                aria-label="Mobile main menubar open button"
                onClick={() => setMobileNavVisibility(!mobileNavVisibility)}
              >
                <MoreVertIcon className={transformation ? "Navbar__mobile-Nav-btn-icon" : "Navbar__mobile-Nav-btn-icon close-slide-down"} />
              </li>
            </ul>
          )}
        </section>
      </nav>
    </>
  );
}

export default Navbar;
