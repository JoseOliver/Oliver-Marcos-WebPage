import { StrictMode, useRef } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Index from "./ui/Index/Index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <>Pagina no encontrada</>,
    children: [
      {
        path: "/about",
        element: <>Acerca de</>,
      },
      {
        path: "/products",
        element: <>Productos</>,
      },
      {
        path: "/",
        element: <Index />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
