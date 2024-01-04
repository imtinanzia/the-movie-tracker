import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For additional matchers like toHaveTextContent
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store";
import App from "./App";
import MadeBy from "./components/made-by";

test("renders App component", () => {
  render(
    <BrowserRouter>
      <MadeBy />
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );

  expect(screen.getByText("The Movie Tracker")).toBeInTheDocument();
});
