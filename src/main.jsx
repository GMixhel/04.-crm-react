import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./componentes/Layout";
import NuevoCliente, {action as actionForm} from "./pages/NuevoCliente";
import {Index, loader as clientesLouder}  from "./pages/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLouder
      },
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: actionForm
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
