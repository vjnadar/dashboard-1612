import { lazy, LazyExoticComponent, MemoExoticComponent } from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ProfileIcon from "@material-ui/icons/Face";
import TableIcon from "@material-ui/icons/TableChart";
import TypographyIcon from "@material-ui/icons/TextFormat";
import { ReactFC } from "../generalTypes";
import { DashboardRoutes } from "./types";

const Dashboard: LazyExoticComponent<ReactFC> = lazy(() => import("../views/Dashboard"));
const IconsComponent: LazyExoticComponent<MemoExoticComponent<() => JSX.Element>> = lazy(() => import("../views/IconsComponent"));
const Notification: LazyExoticComponent<ReactFC> = lazy(() => import("../views/Notification"));
const Profile: LazyExoticComponent<ReactFC> = lazy(() => import("../views/Profile"));
const Tables: LazyExoticComponent<ReactFC> = lazy(() => import("../views/Tables"));
const Typography: LazyExoticComponent<ReactFC> = lazy(() => import("../views/Typography"));

const dashboardRoutes: DashboardRoutes[] = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    component: Dashboard,
    exact: true
  },
  {
    path: "/icons",
    name: "Icons",
    icon: MoreVertIcon,
    component: IconsComponent
  },
  {
    path: "/notification",
    name: "Notification",
    icon: NotificationsIcon,
    component: Notification
  },
  {
    path: "/profile",
    name: "Profile",
    icon: ProfileIcon,
    component: Profile
  },
  {
    path: "/tables",
    name: "Tables",
    icon: TableIcon,
    component: Tables
  },
  {
    path: "/typography",
    name: "Typography",
    icon: TypographyIcon,
    component: Typography
  }
];
export default dashboardRoutes;
