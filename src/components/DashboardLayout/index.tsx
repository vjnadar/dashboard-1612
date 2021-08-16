import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import DashboardMenuLayout from './DashboardMenuLayout';
import dashboardRoutes from '../../routes';
import './DashboardLayout.scss';

function DashboardLayout(): JSX.Element {
    return (
        <div className="Dashboard-Layout" data-test="Dashboard-Layout">
            <div>
                <Navbar />
            </div>
            <ul className="Dashboard-Layout__container" data-test="Dashboard-Layout__container">
                <li className="Dashboard-Layout__sidebar-layout-container">
                    <Sidebar dashboardRoutes={dashboardRoutes} />
                </li>
                <li className="Dashboard-Layout__menu-layout-container">
                    <DashboardMenuLayout dashboardRoutes={dashboardRoutes} />
                </li>
            </ul>
        </div>
    );
}

export default DashboardLayout;
