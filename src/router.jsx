import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./Layout/rootLayout";
import { Home } from "./pages/home";
import { Discovery } from "./pages/discovery";
import { DestinationDetails } from "./pages/destinationDetail";
import { BookDestination } from "./pages/bookDestination";
import { Success } from "./pages/success";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
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
        element: <DestinationDetails />,
      },
      {
        path: "/destination/:slug/book",
        element: <BookDestination />,
      },
      {
        path: "/success",
        element: <Success />,
      },
    ],
  },
]);
