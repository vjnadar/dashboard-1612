import { render, screen } from "@testing-library/react";
import Tables from ".";

describe("this test-suite unit tests <Tables/>", () => {
  it("should test if the sections of <Tables/> render properly", async () => {
    render(<Tables />);
    const simpleTable = screen.getByRole("table");
    expect(simpleTable).toBeInTheDocument();
    const dataGrid = screen.getByRole("grid");
    expect(dataGrid).toBeInTheDocument();
  });
});
