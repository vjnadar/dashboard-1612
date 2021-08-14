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
                <li>
                    <Sidebar dashboardRoutes={dashboardRoutes} />
                </li>
                <li>
                    <DashboardMenuLayout dashboardRoutes={dashboardRoutes} />
                </li>
            </ul>
        </div>
    );
}

export default DashboardLayout;
