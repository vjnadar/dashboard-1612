import { render, screen } from "@testing-library/react";
import Typography from ".";

describe("this test-suite unit tests <Typography/>", () => {
  it("should test if the sections of <Typography/> render properly", async () => {
    render(<Typography />);
    const label = screen.getAllByRole("presentation", { name: "Tag name" });
    expect(label).toHaveLength(16);
    const description = screen.getAllByRole("presentation", { name: "Description" });
    expect(description).toHaveLength(16);
  });
});
