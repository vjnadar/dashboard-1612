import { render, screen } from "@testing-library/react";
import Notification from ".";

describe("this test-suite unit tests <Notification/>", () => {
  it("should test if the sections of <Notification/> render properly", async () => {
    render(<Notification />);
    const notificationCard = screen.getAllByRole("presentation", { name: "Notification Card" });
    expect(notificationCard).toHaveLength(3);
    const alerts = screen.getAllByRole("alert");
    expect(alerts).toHaveLength(10);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(6);
  });
});
