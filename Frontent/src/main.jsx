import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./Routes/App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./Routes/bag.jsx";
import Home from "./Routes/Home.jsx";
import MyntraStore from "./store/index.js";
import { Provider } from "react-redux";
import RegistrationForm from "./component/RegistrationForm.jsx";
import SignInForm from "./component/SignInForm.jsx";
import Filter from "./component/Filter.jsx";
import CheckoutPage from "./component/CheckoutPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/bag",
        element: <Bag />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/RegistrationForm",
        element: <RegistrationForm />,
      },
      {
        path: "/SignInForm",
        element: <SignInForm />,
      },
      {
        path: "/Filter",
        element: <Filter />,
      },
      {
        path: "/Red",
        element: <Filter />,
      },
      {
        path: "/White",
        element: <Filter />,
      },
      {
        path: "/Black",
        element: <Filter />,
      },
      {
        path: "/Womens",
        element: <Filter />,
      },
      {
        path: "/Mens",
        element: <Filter />,
      },
      {
        path: "/Checkout",
        element: <CheckoutPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={MyntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
