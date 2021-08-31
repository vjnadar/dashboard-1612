import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useLocation} from 'react-router-dom';
import { Searchbar } from '../../../UI';
import { ToggleButton } from '../../../UI';
import dashboardRoutes from '../../../../routes';
import { MobileNavbarProps } from './types';
import {MenuNames} from '../enums'
import avatarSvg from '../../../../assets/navbar-icons/avatar.svg';
import notificationSvg from '../../../../assets/navbar-icons/notification.svg';
import searchSvg from '../../../../assets/navbar-icons/search.svg';
import './MobileNavbar.scss';

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
}: MobileNavbarProps): JSX.Element {
    const location=useLocation();
    let sidebarTransformation;
    if (mobileNavVisibility && transformation) {
        sidebarTransformation = 'Mobile-Navbar slide-down';
    }
    if (!transformation && mobileNavVisibility) {
        sidebarTransformation = 'Mobile-Navbar slide-down sidebar-transformation';
    }
    if (transformation && document.getElementsByClassName('Mobile-Navbar slide-down').length > 0) {
        sidebarTransformation = 'Mobile-Navbar slide-down slide-left';
    }
    return (
        <div className={!mobileNavVisibility ? 'Mobile-Navbar' : sidebarTransformation} data-test="Mobile-Navbar">
            <nav className="Mobile-Navbar__main">
                <div className="Mobile-Navbar__route-name" data-test="Mobile-Navbar__route-name">
                    <ul>
                        <li
                            className="Mobile-Navbar__toggle-item"
                            data-test="Mobile-Navbar__toggle-item"
                            onClick={() => {
                                setTransformation(!transformation);
                            }}
                        >
                            <ToggleButton dark={true} transformation={transformation} setTransformation={setTransformation} />
                        </li>
                        <li className="Mobile-Navbar__toggle-item" data-test="Mobile-Navbar__toggle-item">
                        {dashboardRoutes.find(route=>route.path===location.pathname)?.name.toUpperCase()}
                        </li>
                    </ul>
                </div>
                <div className="Mobile-Navbar__space" />
                <Searchbar open={searchbarOpen} toggle={toggle} />
                <div className="Mobile-Navbar__main-items" data-test="Mobile-Navbar__main-items">
                    <ul>
                        <li className="Mobile-Navbar__main-item" data-test="Mobile-Navbar__main-item">
                            <MoreVertIcon
                                onClick={() => setMobileNavVisibility(!mobileNavVisibility)}
                                className={transformation ? 'Mobile-Nav__btn-icon' : 'Mobile-Nav__btn-icon close' }
                                data-test="Mobile-Nav__btn-icon"
                            />
                        </li>
                    </ul>
                </div>
            </nav>
            <nav>
                <ul className="Mobile-Navbar__items" data-test="Mobile-Navbar__items">
                    <li className="Mobile-Navbar__item" data-test="Mobile-Navbar__item" onClick={() => toggle(MenuNames.Searchbar)}>
                        <span className="Mobile-Navbar__item-avatar" data-test="Mobile-Navbar__item-avatar">
                            <Avatar className="search-button" alt="search" src={searchSvg} />
                        </span>
                        <span className="Mobile-Navbar__item-text" data-test="Mobile-Navbar__item-text">
                            SEARCH
                        </span>
                    </li>
                    <li
                        className="Mobile-Navbar__item"
                        data-test="Mobile-Navbar__item"
                        onClick={() => {
                            toggle(MenuNames.NotificationDropdown);
                        }}
                    >
                        <span className="Mobile-Navbar__item-avatar" data-test="Mobile-Navbar__item-avatar">
                            <Avatar alt="notification.svg" src={notificationSvg} />
                        </span>
                        <span className="Mobile-Navbar__item-text" data-test="Mobile-Navbar__item-text">
                            Notification
                        </span>
                        <span
                            className={!notificationDropdownOpen ? 'Mobile-Navbar__item-arrow' : 'Mobile-Navbar__item-arrow open'}
                            data-test="Mobile-Navbar__item-arrow"
                        >
                            <ArrowDropDownIcon />
                        </span>
                    </li>
                    <li
                        className={notificationDropdownOpen ? 'Mobile-Navbar__item-list open-list' : 'Mobile-Navbar__item-list'}
                        data-test="Mobile-Navbar__item-list"
                    >
                        <ul className="Mobile-Navbar__item-list-container">
                            {notificationDropdownItems.map((item,index) => (
                                <li key={`item.name:${index}`}  className="Mobile-Navbar__item-list-item" onClick={item.action}>
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li
                        className="Mobile-Navbar__item"
                        data-test="Mobile-Navbar__item"
                        onClick={() => {
                            toggle(MenuNames.ProfileDropdown);
                        }}
                    >
                        <span className="Mobile-Navbar__item-avatar" data-test="Mobile-Navbar__item-avatar">
                            <Avatar alt="avatar.svg" src={avatarSvg} />
                        </span>
                        <span className="Mobile-Navbar__item-text" data-test="Mobile-Navbar__item-text">
                            Logout
                        </span>
                        <span
                            className={!profileDropdownOpen ? 'Mobile-Navbar__item-arrow' : 'Mobile-Navbar__item-arrow open'}
                            data-test="Mobile-Navbar__item-arrow"
                        >
                            <ArrowDropDownIcon />
                        </span>
                    </li>
                    <li
                        className={profileDropdownOpen ? 'Mobile-Navbar__item-list open-list' : 'Mobile-Navbar__item-list'}
                        data-test="Mobile-Navbar__item-list"
                    >
                        <ul className="Mobile-Navbar__item-list-container">
                            {profileDropdownItems.map((item,index) => (
                                <li key={`item.name:${index}`} className="Mobile-Navbar__item-list-item" onClick={item.action}>
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default MobileNavbar;
