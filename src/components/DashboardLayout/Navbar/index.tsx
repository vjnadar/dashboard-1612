import { useState, useEffect } from 'react';
import {useLocation,use} from 'react-router-dom'
import { ToggleButton } from '../../UI';
import { Dropdown } from '../../UI';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Searchbar } from '../../UI';
import MobileNavbar from './MobileNavbar';
import {profileDropdownItems,notificationDropdownItems} from './data';
import dashboardRoutes from '../../../routes';
import { NavbarProps } from './types';
import {MenuNames} from './enums'
import avatarSvg from '../../../assets/navbar-icons/avatar.svg';
import notificationSvg from '../../../assets/navbar-icons/notification.svg';
import searchSvg from '../../../assets/navbar-icons/search.svg';

import './Navbar.scss';

function Navbar({ transformation, setTransformation, mobileView }: NavbarProps): JSX.Element {
    //horizontal flex elements should have equal widths
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
    const [notificationDropdownOpen, setNotificationDropdownOpen] = useState(false);
    const [searchbarOpen, setSearchOpen] = useState(false);
    const [mobileNavVisibility, setMobileNavVisibility] = useState(false);
    const location=useLocation();
    useEffect(() => {
        setProfileDropdownOpen(false);
        setNotificationDropdownOpen(false);
        setMobileNavVisibility(false);
        setSearchOpen(false);
    }, [mobileView]);
    function toggle(segmentName) {
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
            <nav className={mobileNavVisibility && !transformation ? 'Navbar moved' : 'Navbar'} data-test="Navbar">
                {!mobileNavVisibility ? (
                    <div className="Navbar__route-name" data-test="Navbar__route-name">
                        <ul>
                            <li className="Navbar__toggle-item" data-test="Navbar__toggle-item">
                                <ToggleButton transformation={transformation} setTransformation={setTransformation} />
                            </li>
                            <li className="Navbar__toggle-item" data-test="Navbar__toggle-item">{dashboardRoutes.find(route=>route.path===location.pathname)?.name.toUpperCase()}</li>
                        </ul>
                    </div>
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
                    />
                )}
                <div className="Navbar__items" data-test="Navbar__items">
                    {!mobileView ? (
                        <ul>
                            <li className="Navbar__item" data-test="Navbar__item">
                                <Avatar className="search-button" alt="search.svg" src={searchSvg} onClick={() => toggle('SEARCH_BAR')} />
                            </li>
                            <li className="Navbar__item" data-test="Navbar__item">
                                <Dropdown
                                    dropdownItems={notificationDropdownItems}
                                    open={notificationDropdownOpen}
                                    setOpen={toggle}
                                    dropdownName={MenuNames.NotificationDropdown}
                                    avatarImgSrc={notificationSvg}
                                    large={true}
                                />
                            </li>
                            <li className="Navbar__item" data-test="Navbar__item">
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
                            <li className="Navbar__item toggle-mobile-navbar" data-test="Navbar__item">
                                <MoreVertIcon
                                    onClick={() => setMobileNavVisibility(!mobileNavVisibility)}
                                    className={transformation ? 'Navbar__mobile-Nav-btn-icon' : 'Navbar__mobile-Nav-btn-icon close'}
                                />
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
