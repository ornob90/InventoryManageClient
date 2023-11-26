import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import CreateShop from "../pages/CreateShop/CreateShop";
import Dashboard from "../layout/Dashboard";
import ProductManage from "../pages/Dashboard/Manager/ProductManage/ProductManage";
import SalesCollection from "../pages/Dashboard/Manager/SalesCollection/SalesCollection";
import AddProduct from "../pages/Dashboard/Manager/AddProduct/AddProduct";
import UpdateProduct from "../pages/Dashboard/Manager/UpdateProduct/UpdateProduct";
import Checkout from "../pages/Dashboard/Manager/Checkout/Checkout";
import Subscription from "../pages/Dashboard/Manager/Subscription/Subscription";
import SalesSummary from "../pages/Dashboard/Manager/SalesSummary/SalesSummary";
import AdminSalesSummary from "../pages/Dashboard/Admin/SalesSummary/AdminSalesSummary";
import AdminManageShop from "../pages/Dashboard/Admin/ManageShop/AdminManageShop";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
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
      {
        path: "/dashboard/add-product",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/update-product/:id",
        element: <UpdateProduct />,
      },
      {
        path: "/dashboard/checkout",
        element: <Checkout />,
      },
      {
        path: "/dashboard/subscription",
        element: <Subscription />,
      },
      {
        path: "/dashboard/sales-summary",
        element: <SalesSummary />,
      },
      {
        path: "/dashboard/admin/sales-summary",
        element: <AdminSalesSummary />,
      },
      {
        path: "/dashboard/admin/manage-shop",
        element: <AdminManageShop />,
      },
    ],
  },
]);

export default router;
