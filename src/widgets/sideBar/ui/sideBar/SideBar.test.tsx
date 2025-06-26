import { fireEvent, screen } from "@testing-library/react";

import { SideBar } from "./SideBar";
import { ComponentRender } from "shared/lib/tests/componentRender/componentRender";


describe("SideBar", () => {
  test("with only first param", () => {
    ComponentRender(<SideBar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("test toggle", () => {
    ComponentRender(<SideBar />);
    const toggleBtn = screen.getByTestId("sidebarToggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();

    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
