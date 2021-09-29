import { screen, render } from "@testing-library/react";
import Dummy from "./DummyComponent";

describe("this test-suite unit tests the useWindowSize hook", () => {
  it("should test if the useWindowSize hook produces a width value and height value inside a dummy component", () => {
    render(<Dummy />);
    const widthVal = screen.getByRole("presentation", { name: "Width" });
    expect(widthVal).toHaveTextContent("1024");
    const heightVal = screen.getByRole("presentation", { name: "Width" });
    expect(heightVal).toHaveTextContent("1024");
  });
});
