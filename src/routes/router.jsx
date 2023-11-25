import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import CreateShop from "../pages/CreateShop/CreateShop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create-shop",
        element: <CreateShop />,
      },
    ],
  },
]);

export default router;
