import { Link } from "react-router-dom";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { SideBarProps } from "./types";
import "./Sidebar.scss";

function Sidebar({ dashboardRoutes, location }: SideBarProps): JSX.Element {
  return (
    <section className="Sidebar">
      <header className="Sidebar__title">
        <ul>
          <li>
            <WhatshotIcon className="icons" />
          </li>
          <li>
            <span>V.J.Nadar</span>
          </li>
        </ul>
      </header>
      <nav className="Sidebar__items">
        <ul>
          {dashboardRoutes.map((route) => (
            <li key={route.name} className="Sidebar__item">
              <Link to={route.path} className={location === route.path ? "Sidebar__item-link selected-route" : "Sidebar__item-link"}>
                <route.icon className="Sidebar__item--icons" />
                <span>{route.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default Sidebar;
