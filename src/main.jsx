import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./componentes/Layout";
import NuevoCliente from "./componentes/pages/NuevoCliente";
import {Index, loader as clientesLouder}  from "./componentes/pages/Index";

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
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
