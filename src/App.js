import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet } from "react-router-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import AboutClass from "./components/AboutClass";
import Grocerry from "./components/Grocerry";

const Grocerry = lazy(() => import("./components/Grocerry"));
//other methid const ResturantCard = ({resname,cuisine}) => {

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <AboutClass /> },
      { path: "/contact", element: <Contact /> },
      { path: "/resturants/:resId", element: <ResturantMenu /> },
      {
        path: "/grocerry",
        element: (
          <Suspense fallback={<h2>This is not yet loaded</h2>}>
            <Grocerry />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<Applayout />);
root.render(<RouterProvider router={appRouter} />);
