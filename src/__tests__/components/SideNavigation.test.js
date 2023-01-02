import { render, screen } from "@testing-library/react";
import SideNavigation from "../../components/Layout/SideNavigation";
import { BrowserRouter } from "react-router-dom";

test("Render SideNavigation with links", () => {
  render(<SideNavigation />, { wrapper: BrowserRouter });

  expect(screen.getByText(/dashboard/i).closest("a")).toHaveAttribute(
    "href",
    "/",
  );
  expect(screen.getByText(/customers/i).closest("a")).toHaveAttribute(
    "href",
    "/customers",
  );
  expect(screen.getByText(/employees/i).closest("a")).toHaveAttribute(
    "href",
    "/employees",
  );
  expect(screen.getByText(/trucks/i).closest("a")).toHaveAttribute(
    "href",
    "/trucks",
  );
  expect(screen.getByText(/orders/i).closest("a")).toHaveAttribute(
    "href",
    "/orders",
  );
  expect(screen.getByText(/settings/i).closest("a")).toHaveAttribute(
    "href",
    "/settings",
  );
  expect(screen.getByText(/account/i).closest("a")).toHaveAttribute(
    "href",
    "/account",
  );
});
