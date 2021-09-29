import { render, screen } from "@testing-library/react";
import Dashboard from ".";

jest.mock("react-chartjs-2", () => ({
  Bar: () => null,
  Line: () => null
}));
describe("this test-suite unit tests <Dashboard/>", () => {
  it("should test if the sections of <Dashboard/> render properly", () => {
    render(<Dashboard />);
    const salesChart = screen.getByRole("presentation", { name: "Total Sales" });
    expect(salesChart).toBeInTheDocument();
    const incomeChart = screen.getByRole("presentation", { name: "Total Income" });
    expect(incomeChart).toBeInTheDocument();
    const expenseChart = screen.getByRole("presentation", { name: "Profit" });
    expect(expenseChart).toBeInTheDocument();
    const simpleTable = screen.getByRole("table", { name: "simple table" });
    expect(simpleTable).toBeInTheDocument();
    const empTable = screen.getByRole("table", { name: "Employees-Table" });
    expect(empTable).toBeInTheDocument();
  });
});
