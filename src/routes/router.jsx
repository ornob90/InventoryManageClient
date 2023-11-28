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
import BASE_URL from "../utils/api";
import PrivateRoute from "../routes/PrivateRoute";
import ManagerRoute from "./ManagerRoute";
import SecureRoute from "./SecureRoute";
import AdminRoute from "./AdminRoute";
import Error from "../pages/Error/Error";
import Forbidden from "../pages/Forbidden/Forbidden";
import ShareShop from "../pages/Dashboard/Manager/ShareShop/ShareShop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create-shop",
        element: (
          <PrivateRoute>
            <CreateShop />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <Error />,
  },
  {
    path: "/forbidden",
    element: <Forbidden />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <SecureRoute>
          <Dashboard />
        </SecureRoute>
      </PrivateRoute>
    ),
    // errorElement: <Error />,
    children: [
      {
        path: "/dashboard/product-manage",
        element: (
          <ManagerRoute>
            <ProductManage />
          </ManagerRoute>
        ),
      },
      {
        path: "/dashboard/sales-collection",
        element: (
          <ManagerRoute>
            <SalesCollection />
          </ManagerRoute>
        ),
      },
      {
        path: "/dashboard/add-product",
        element: (
          <ManagerRoute>
            <AddProduct />
          </ManagerRoute>
        ),
      },
      {
        path: "/dashboard/update-product/:id",
        element: (
          <ManagerRoute>
            <UpdateProduct />
          </ManagerRoute>
        ),
        loader: ({ params }) => fetch(BASE_URL + `/product/${params.id}`),
      },
      {
        path: "/dashboard/checkout",
        element: (
          <ManagerRoute>
            <Checkout />
          </ManagerRoute>
        ),
      },
      {
        path: "/dashboard/subscription",
        element: (
          <ManagerRoute>
            <Subscription />
          </ManagerRoute>
        ),
      },
      {
        path: "/dashboard/sales-summary",
        element: (
          <ManagerRoute>
            <SalesSummary />
          </ManagerRoute>
        ),
      },
      {
        path: "/dashboard/share-shop",
        element: (
          <ManagerRoute>
            <ShareShop />
          </ManagerRoute>
        ),
      },
      {
        path: "/dashboard/admin/sales-summary",
        element: (
          <AdminRoute>
            <AdminSalesSummary />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin/manage-shop",
        element: (
          <AdminRoute>
            <AdminManageShop />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
