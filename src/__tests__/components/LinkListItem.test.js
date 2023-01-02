import { People } from "@mui/icons-material";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LinkListItem from "../../components/LinkListItem";

test("Render SideNavigation with links", () => {
  render(<LinkListItem icon={<People/>} link="/customer" textLink="Customer"/>, { wrapper: BrowserRouter });

  const linkElement = screen.getByRole('link');

  expect(linkElement).toHaveAttribute('href', '/customer');
  expect(linkElement).toHaveTextContent('Customer');
  expect(linkElement).toBeInTheDocument();
});
