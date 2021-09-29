import { render, screen } from "@testing-library/react";
import Profile from ".";

describe("this test-suite unit tests <Profile/>", () => {
  it("should test if the sections of <Profile/> render properly", async () => {
    render(<Profile />);
    const textBoxes = screen.getAllByRole("textbox");
    expect(textBoxes).toHaveLength(10);
    const profileCards = screen.getAllByRole("presentation", { name: "Profile Card" });
    expect(profileCards).toHaveLength(2);
    const button = screen.getByRole("button", { name: "Save" });
    expect(button).toBeInTheDocument();
    const elonMuskImg = screen.getByRole("img");
    expect(elonMuskImg).toBeInTheDocument();
    const fbButton = screen.getByRole("button", { name: "Facebook" });
    expect(fbButton).toBeInTheDocument();
    const twitterButton = screen.getByRole("button", { name: "Twitter" });
    expect(twitterButton).toBeInTheDocument();
    const mailButton = screen.getByRole("button", { name: "Mail" });
    expect(mailButton).toBeInTheDocument();
  });
});
