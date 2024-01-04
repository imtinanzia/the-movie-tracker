import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import MadeBy from "./components/made-by";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <Provider store={store}>
        <MadeBy />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
