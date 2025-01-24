import { StrictMode, useRef } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Index from "./ui/Index/Index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
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
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} future={{ v7_startTransition: true }} />
);
