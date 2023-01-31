import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Instamart from "./components/Instamart";

const App = () => {
  return (
    <>
      <h1>App Component</h1>
      <Header />
      <Instamart/>
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <>OOPS, NOT FOUND!!!</>,
    children: [
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/> ,
      },{
        path:"/",
        element:<Body/>
      }
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
