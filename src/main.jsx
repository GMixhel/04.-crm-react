import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./componentes/Layout";
import NuevoCliente, {action as actionForm} from "./pages/NuevoCliente";
import { Index, loader as clientesLoader } from "./pages/Index";
import ErrorPage from "./componentes/ErrorPage";
import EditarCliente, { loader as editarLoader, action as editarAction } from "./pages/EditarCliente";
import {action as eliminarAction } from './componentes/Clientes'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: actionForm,
        errorElement: <ErrorPage />,
      },
      {
        path: "/cliente/:clienteId/editar",
        element: <EditarCliente />,
        loader: editarLoader,
        action: editarAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/cliente/:clienteId/eliminar",
        action: eliminarAction,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
