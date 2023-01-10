import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Test1 from "./Test1";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "test1/:id",
    loader: ({params}) => params.id,
    element: <Test1 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
