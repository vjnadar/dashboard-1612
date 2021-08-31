import React,{useState} from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import DashboardMenuLayout from './DashboardMenuLayout';
import {useWindowSize} from '../../customHooks'
import dashboardRoutes from '../../routes';
import './DashboardLayout.scss';

function DashboardLayout(): JSX.Element {
    const [width] = useWindowSize();
    const [transformation, setTransformation] = useState(false);
    const [mobileView, setMobileView] = useState(false);

    React.useEffect(() => {
        if (width < 796&&!mobileView) {
            setMobileView(true);
            setTransformation(true);
        } else if (width > 796) {
            setTransformation(false);
            setMobileView(false);
        }
    }, [width, transformation,mobileView]);
    return (
        <div className="Dashboard-Layout" data-test="Dashboard-Layout">
            <div>
            <Navbar transformation={transformation} setTransformation={setTransformation} mobileView={mobileView} />
            </div>
            <ul className="Dashboard-Layout__container" data-test="Dashboard-Layout__container">
                <li className={!transformation?'Dashboard-Layout__sidebar-layout-container':'Dashboard-Layout__sidebar-layout-container transformation'}>
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
