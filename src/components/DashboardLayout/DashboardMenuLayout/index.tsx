import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { DashboardMenuLayoutProps } from "./types";
import { Spinner, Footer } from "../../UI";
import "./DashboardMenuLayout.scss";

function DashboardMenuLayout({ dashboardRoutes }: DashboardMenuLayoutProps): JSX.Element {
  return (
    <div className="Dashboard-Menu-Layout">
      <Suspense
        fallback={
          <>
            <Spinner />
          </>
        }
      >
        <Switch>
          {dashboardRoutes.map((route) => (
            <Route key={route.name} path={route.path} exact={route.exact}>
              <route.component />
            </Route>
          ))}
        </Switch>
        <Redirect from="/" to={dashboardRoutes[0].path} />
        <Footer />
      </Suspense>
    </div>
  );
}

export default DashboardMenuLayout;
