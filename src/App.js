import React from "react";
import * as ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { RouterProvider } from "react-router-dom";
import { RouterConfigs } from "./Components/RouteConfiguration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={RouterConfigs} />);
