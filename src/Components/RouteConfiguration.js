import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AppLayout from "./AppLayout";
import About from "./About";
import Restaurant from "./Restaurant";
import Contact from "./Contact";

export const RouterConfigs = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // errorElement: 'Error',
    children: [
      {
        path: "/",
        element: <Restaurant />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <Restaurant />,
      },
    ],
  },
]);
