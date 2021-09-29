import { LazyExoticComponent } from "react";
import { ReactFC } from "../../generalTypes";
import { SvgIconComponent } from "@material-ui/icons";

export type DashboardRoutes = {
  path: string;
  name: string;
  exact?: boolean;
  icon: SvgIconComponent;
  component: LazyExoticComponent<ReactFC>;
};
