import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Header } from "./pages/header";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/header",
    element: <Header/>
  }
]);