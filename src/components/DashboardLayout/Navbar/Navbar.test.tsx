import { render, screen } from "@testing-library/react";
import { MenuNames } from "./enums";
import Navbar from ".";

describe("this test-suite unit tests <Navbar/> when mobile view is false", () => {
  beforeEach(() => {
    render(<Navbar transformation={false} setTransformation={jest.fn()} mobileView={false} location={"/dashboard"} />);
  });
  it("should check if the sections of <Navbar/> render properly, when mobile view is false", () => {
    const navbar = screen.getByRole("navigation", { name: "Main menu bar" });
    expect(navbar).toBeInTheDocument();
    const toggleButton = screen.getByRole("listitem", { name: "Toggle button section" });
    expect(toggleButton).toBeInTheDocument();
    const routeName = screen.getByRole("listitem", { name: "Selected route" });
    expect(routeName).toHaveTextContent("DASHBOARD");
    const searchBtnImg = screen.getByRole("listitem", { name: "Search bar open button" });
    expect(searchBtnImg).toBeInTheDocument();
    const notificationDropdown = screen.getByRole("listbox", { name: "Notification dropdown" });
    expect(notificationDropdown).toBeInTheDocument();
    const userProfileDropdown = screen.getByRole("listbox", { name: "User profile dropdown" });
    expect(userProfileDropdown).toBeInTheDocument();
    const profileImage = screen.getByRole("image", { name: `${MenuNames.ProfileDropdown}_IMAGE` });
    expect(profileImage).toBeInTheDocument();
    const notificationImage = screen.getByRole("image", { name: `${MenuNames.NotificationDropdown}_IMAGE` });
    expect(notificationImage).toBeInTheDocument();
  });
});
describe("this test-suite unit tests <Navbar/> when mobile view is true", () => {
  beforeEach(() => {
    render(<Navbar transformation={false} setTransformation={jest.fn()} mobileView={true} location={"/dashboard"} />);
  });
  it("should check if the sections of <Navbar/> render properly, when mobile view is true", () => {
    const navbar = screen.getByRole("navigation", { name: "Main menu bar" });
    expect(navbar).toBeInTheDocument();
    const toggleButton = screen.getAllByRole("button", { name: "Toggle button" });
    expect(toggleButton).toHaveLength(2);
    const searchbarSection = screen.getAllByRole("alert", { name: "Search textbox container" });
    expect(searchbarSection).not.toHaveLength(2);
    const mobileViewNavigationBar = screen.getByRole("alert", { name: "Mobile main menu bar dropdown" });
    expect(mobileViewNavigationBar).toBeInTheDocument();
    const mobileNavigationbarOpenButton = screen.getByRole("button", { name: "Mobile main menubar open button" });
    expect(mobileNavigationbarOpenButton).toBeInTheDocument();
  });
});
