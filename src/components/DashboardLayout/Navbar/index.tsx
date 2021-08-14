import React from 'react';
import './Navbar.scss';

function Navbar(): JSX.Element {
    return (
        <nav className="Navbar" data-test="Navbar">
            <div className="Navbar__route-name" data-test="Navbar__route-name">
                DASHBOARD
            </div>
            <div className="Navbar__space" />
            <div className="Navbar__items" data-test="Navbar__items">
                <ul>
                    <li className="Navbar__item" data-test="Navbar__item">
                        <input className="Navbar__search-bar" type="text" placeholder="Search.." />
                    </li>
                    <li className="Navbar__item" data-test="Navbar__item">
                        <select className="Navbar__select-option">
                            <option>Vijay</option>
                            <option>Benitta</option>
                            <option>Agaran</option>
                        </select>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
