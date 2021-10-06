import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import routes from "../../../routes";
import Sidebar from ".";

describe("this test-suite unit tests <Sidebar/>", () => {
  it("should test if the sections of <Sidebar> render properly", () => {
    render(
      <BrowserRouter>
        <Sidebar dashboardRoutes={routes} location="/dashboard" />
      </BrowserRouter>
    );
    routes.forEach((route) => {
      const routeElement = screen.getByRole("link", { name: route.name });
      expect(routeElement).toBeInTheDocument();
    });
    const headerLabel = screen.getByText(/V.J.Nadar/i);
    expect(headerLabel).toBeInTheDocument();
  });
});
