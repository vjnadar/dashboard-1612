import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, Route, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { MenuNames } from "./Navbar/enums";
import routes from "../../routes";
import DashboardLayout from ".";

jest.mock("react-chartjs-2", () => ({
  Bar: () => null,
  Line: () => null
}));

describe("this test-suite unit tests <Sidebar/>", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <DashboardLayout />
      </BrowserRouter>
    );
  });
  it("should check the visibility of <Searchbar/>  search button is pressed and not pressed", () => {
    const notVisibleSearchboxContainer = screen.getByRole("alert", { name: "Search textbox container" });
    expect(notVisibleSearchboxContainer).toHaveClass("Searchbar");
    const searchButton = screen.getByRole("button", { name: "Search button" });
    userEvent.click(searchButton);
    const visibleSearchboxContainer = screen.getByRole("alert", { name: "Search textbox container" });
    expect(visibleSearchboxContainer).toHaveClass("Searchbar slide-down");
  });
  it("should check <Dropdown/> by clicking on the notification drop down", () => {
    const notificationDropdown = screen.getByRole("button", { name: `${MenuNames.NotificationDropdown}_BUTTON` });
    const notificationDropdownItems = screen.getByRole("list", { name: `${MenuNames.NotificationDropdown}_ITEMS` });
    expect(notificationDropdownItems).toHaveClass("Dropdown__content");
    userEvent.click(notificationDropdown);
    expect(notificationDropdownItems).toHaveClass("Dropdown__content open large");
  });
  it("should check <Dropdown/> by clicking on the profile drop down", () => {
    const notificationDropdown = screen.getByRole("button", { name: `${MenuNames.ProfileDropdown}_BUTTON` });
    const notificationDropdownItems = screen.getByRole("list", { name: `${MenuNames.ProfileDropdown}_ITEMS` });
    expect(notificationDropdownItems).toHaveClass("Dropdown__content");
    userEvent.click(notificationDropdown);
    expect(notificationDropdownItems).toHaveClass("Dropdown__content open");
  });
});
describe("should test if the various animation classes of <DashboardLayout/> are added properly and test the functionality of the component", () => {
  it("should test <Dashboard/> when mobileNavVisibility is true and transformation is false after clicking on the toggle twice.", async () => {
    render(
      <BrowserRouter>
        <DashboardLayout />
      </BrowserRouter>
    );
    await waitFor(() => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 600
      });
      window.dispatchEvent(new Event("resize"));
    });
    const mobileNavigationbarOpenButton = await screen.findByRole("button", { name: "Mobile main menubar open button" });
    userEvent.click(mobileNavigationbarOpenButton);
    const toggleButton = screen.getByRole("button", { name: "Toggle button" });
    userEvent.click(toggleButton);
    userEvent.click(toggleButton);
    const mobileMainNavigationbar = screen.getByRole("alert", { name: "Mobile main menu bar dropdown" });
    expect(mobileMainNavigationbar).toHaveClass("Mobile-Navbar slide-down slide-left");
  });
  it("should test <Dashboard/> the props mobileNavVisibility and transformation are both true", async () => {
    render(
      <BrowserRouter>
        <DashboardLayout />
      </BrowserRouter>
    );
    await waitFor(() => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 600
      });
      window.dispatchEvent(new Event("resize"));
    });
    const mobileNavigationbarOpenButton = await screen.findByRole("button", { name: "Mobile main menubar open button" });
    userEvent.click(mobileNavigationbarOpenButton);
    const mobileMainMenubar = screen.getByRole("alert", { name: "Mobile main menu bar dropdown" });
    expect(mobileMainMenubar).toHaveClass("Mobile-Navbar slide-down");
  });
  it("should test <DashboardLayout/> when mobileNavVisibility is true and transformation is false.", async () => {
    render(
      <BrowserRouter>
        <DashboardLayout />
      </BrowserRouter>
    );
    await waitFor(() => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 600
      });
      window.dispatchEvent(new Event("resize"));
    });
    const mobileNavigationbarOpenButton = await screen.findByRole("button", { name: "Mobile main menubar open button" });
    userEvent.click(mobileNavigationbarOpenButton);
    const toggleButton = screen.getByRole("button", { name: "Toggle button" });
    userEvent.click(toggleButton);
    const mobileMainMenubar = screen.getByRole("alert", { name: "Mobile main menu bar dropdown" });
    expect(mobileMainMenubar).toHaveClass("Mobile-Navbar slide-down sidebar-transformation");
  });
  it("should test the menus of <DashboardLayout/> by clicking on the respective buttons", () => {
    render(
      <BrowserRouter>
        <DashboardLayout />
      </BrowserRouter>
    );
    //testing the search bar slidedown
    const searchbarButton = screen.getByRole("button", { name: "Mobile search bar open button" });
    userEvent.click(searchbarButton);
    const searchboxContainer = screen.getByRole("alert", { name: "Search textbox container" });
    expect(searchboxContainer).toHaveClass("Searchbar slide-down");
    userEvent.click(searchbarButton);
    expect(searchboxContainer).toHaveClass("Searchbar");
    //testing the notification dropdown
    const notificationDropdownOpenBtn = screen.getByRole("button", { name: "Notification menu open button" });
    userEvent.click(notificationDropdownOpenBtn);
    const notificationListbox = screen.getByRole("listbox", { name: "Notification listbox" });
    expect(notificationListbox).toHaveClass("Mobile-Navbar__item-list open-list");
    userEvent.click(notificationDropdownOpenBtn);
    expect(notificationListbox).toHaveClass("Mobile-Navbar__item-list");
    //testing the user profile dropdown
    const userProfileDropdownOpenBtn = screen.getByRole("button", { name: "User profile menu open button" });
    userEvent.click(userProfileDropdownOpenBtn);
    const userProfileListbox = screen.getByRole("listbox", { name: "User profile listbox" });
    expect(userProfileListbox).toHaveClass("Mobile-Navbar__item-list open-list");
    userEvent.click(userProfileDropdownOpenBtn);
    expect(userProfileListbox).toHaveClass("Mobile-Navbar__item-list");
  });
  it("should check the various routes of <DashboardLayout/>", () => {
    const history = createMemoryHistory({
      initialEntries: ["/"],
      initialIndex: 0
    });
    render(
      <Router history={history}>
        <Route path="/">
          <DashboardLayout />
        </Route>
      </Router>
    );
    routes.forEach((route) => {
      const routeElement = screen.getByRole("link", { name: `${route.name}` });
      userEvent.click(routeElement);
      const routeName = screen.getByRole("listitem", { name: "Selected route" });
      expect(routeName).toHaveTextContent(route.name.toUpperCase());
      expect(history.location.pathname).toBe(route.path);
    });
  });
});
