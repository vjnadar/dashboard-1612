import { render, screen } from "@testing-library/react";
import IconsComponent from ".";

describe("this test-suite unit tests <IconsComponent/>", () => {
  it("should test if the sections of <IconsComponent/> render properly", async () => {
    render(<IconsComponent />);
    const iconRowElement = await screen.findAllByRole("presentation", { name: "Icons-Row-Element" });
    expect(iconRowElement).toHaveLength(1000);
  });
});
