import { createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/home"
import { Discovery } from "./pages/discovery"
import { Location } from "./pages/Location"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/location",
    element: <Location />,
  },
  {
    path: "/discovery",
    element: <Discovery />,
  },
])