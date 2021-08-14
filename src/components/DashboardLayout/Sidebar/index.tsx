import React from 'react';
import { Link } from 'react-router-dom';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import { SideBarProps } from './types';
import './Sidebar.scss';

function Sidebar({ dashboardRoutes }: SideBarProps): JSX.Element {
    return (
        <div className="Sidebar" data-test="Sidebar">
            <div className="Sidebar__title" data-test="Sidebar__title">
                <ul>
                    <li>
                        <WhatshotIcon className="icons" />
                    </li>
                    <li>
                        <span>V.J.Nadar</span>
                    </li>
                </ul>
            </div>
            <p></p>
            <nav className="Sidebar__items" data-test="Sidebar__items">
                <ul>
                    {dashboardRoutes.map((route) => (
                        <li key={route.name} className="Sidebar__item" data-test="Sidebar__item">
                            <route.icon className="Sidebar__item--icons" />
                            <Link to={route.path} className="col" data-test={`Sidebar__${route.name}-Link`}>
                                {route.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
