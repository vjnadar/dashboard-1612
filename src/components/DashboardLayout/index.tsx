import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import DashboardMenuLayout from "./DashboardMenuLayout";
import { useWindowSize } from "../../customHooks";
import dashboardRoutes from "../../routes";
import "./DashboardLayout.scss";

function DashboardLayout(): JSX.Element {
  const [width] = useWindowSize();
  const location: string = useLocation().pathname;
  const [transformation, setTransformation] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (width < 796 && !mobileView) {
      setMobileView(true);
      setTransformation(true);
    } else if (width > 796) {
      setTransformation(false);
      setMobileView(false);
    }
  }, [width, transformation, mobileView]);
  const transformationAnimationClassName =
    width > 796 && mounted
      ? "Dashboard-Layout__sidebar-layout-container transformation"
      : "Dashboard-Layout__sidebar-layout-container transformation mobile-view";
  return (
    <main className="Dashboard-Layout">
      <section>
        <Navbar transformation={transformation} setTransformation={setTransformation} mobileView={mobileView} location={location} />
      </section>
      <ul className="Dashboard-Layout__container">
        <li className={!transformation ? "Dashboard-Layout__sidebar-layout-container" : transformationAnimationClassName}>
          <Sidebar dashboardRoutes={dashboardRoutes} location={location} />
        </li>
        <li className="Dashboard-Layout__menu-layout-container">
          <DashboardMenuLayout dashboardRoutes={dashboardRoutes} />
        </li>
      </ul>
    </main>
  );
}

export default DashboardLayout;
