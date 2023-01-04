import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import renderWithRouter from "../../utils/renderWithRouter";
import App from "src/App.tsx";

test("test full routing - sidebar", async () => {
  const { user } = renderWithRouter(<App />, { route: "/coustomer/error" });
  expect(screen.getByText(/dashboard/i)).toBeInTheDocument();

  await user.click(screen.getByText(/customers/i));
  expect(screen.getByText(/your customers/i)).toBeInTheDocument();

  await user.click(screen.getByText(/employees/i));
  expect(screen.getByText(/your employees/i)).toBeInTheDocument();

  await user.click(screen.getByText(/trucks/i));
  expect(screen.getByText(/your trucks/i)).toBeInTheDocument();

  await user.click(screen.getByText(/orders/i));
  expect(screen.getByText(/Clients orders/i)).toBeInTheDocument();

  await user.click(screen.getByText(/settings/i));
  expect(screen.getByText(/edit company settings/i)).toBeInTheDocument();

  await user.click(screen.getByText(/account/i));
  expect(screen.getByText(/edit account settings/i)).toBeInTheDocument();
});

test("loading on bad page", () => {
  const { user } = renderWithRouter(<App />, { route: "/coustomer/error" });

  expect(screen.getByText(/page not found/i)).toBeInTheDocument();
});

// test("Test bad routing on page", () => {
//   const badRoute = "/customer/111";
//   render(
//     <MemoryRouter initialEntries={[badRoute]}>
//       <App />
//     </MemoryRouter>,
//   );

//   expect(screen.getByText(/page not found/i)).toBeInTheDocument();
// });
