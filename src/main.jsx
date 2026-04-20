import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";

import RootLayout from "./layout/RootLayout";
import Homepage from "./pages/homepage/Homepage";
import Timeline from "./pages/timeline/Timeline";
import { router } from "./router/Routes";
import TimelineProvider from "./context/TimelineProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TimelineProvider>
      <RouterProvider router={router}></RouterProvider>
    </TimelineProvider>
  </StrictMode>,
);
