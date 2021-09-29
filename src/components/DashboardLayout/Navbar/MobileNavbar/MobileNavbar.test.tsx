import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MobileNavbar from ".";
import { profileDropdownItems, notificationDropdownItems } from "../data";
import { MenuNames } from "../enums";

describe("this test-suite unit tests <MobileNavbar/>", () => {
  it("should test if the section of <MobileNavbar> render properly", () => {
    render(
      <MobileNavbar
        transformation={false}
        setTransformation={jest.fn()}
        searchbarOpen={false}
        toggle={jest.fn()}
        mobileNavVisibility={false}
        setMobileNavVisibility={jest.fn()}
        profileDropdownOpen={false}
        notificationDropdownOpen={false}
        profileDropdownItems={profileDropdownItems}
        notificationDropdownItems={notificationDropdownItems}
        location={`/dashboard`}
      />
    );
    const mobileMainNavigationbar = screen.getByRole("alert", { name: "Mobile main menu bar dropdown" });
    expect(mobileMainNavigationbar).toBeInTheDocument();
    const toggleButton = screen.getByRole("button", { name: "Toggle button" });
    expect(toggleButton).toBeInTheDocument();
    const selectedRouteName = screen.getByRole("listitem", { name: "Mobile main menu bar selected route" });
    expect(selectedRouteName).toHaveTextContent("DASHBOARD");
    const searchbarButton = screen.getByRole("button", { name: "Mobile search bar open button" });
    expect(searchbarButton).toBeInTheDocument();
    const notificationDropdownOpenBtn = screen.getByRole("button", { name: "Notification menu open button" });
    expect(notificationDropdownOpenBtn).toBeInTheDocument();
    const userProfileDropdownOpenBtn = screen.getByRole("button", { name: "User profile menu open button" });
    expect(userProfileDropdownOpenBtn).toBeInTheDocument();
  });
});
describe("should test if the various animation classes of <MobileNavbar/> are added properly", () => {});
