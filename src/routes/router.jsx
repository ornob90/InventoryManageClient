import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import CreateShop from "../pages/CreateShop/CreateShop";
import Dashboard from "../layout/Dashboard";
import ProductManage from "../pages/Dashboard/Manager/ProductManage/ProductManage";
import SalesCollection from "../pages/Dashboard/Manager/SalesCollection/SalesCollection";

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
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <ProductManage />,
      },
      {
        path: "/dashboard/sales-collection",
        element: <SalesCollection />,
      },
    ],
  },
]);

export default router;
