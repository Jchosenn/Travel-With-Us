import { createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/home"
import { Discovery } from "./pages/discovery"
import { DestinationDetails } from "./pages/destinationDetail"
import { BookDestination } from "./pages/bookDestination"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/discovery",
    element: <Discovery />,
  },
  {
    path: "/destination/:slug",
    element: <DestinationDetails/>,
  },
  {
    path: "/destination/:slug/book",
    element: <BookDestination/>,
  },
])