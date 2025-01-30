import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import App from "../App"

// HomePage
import Home from "../pages/home/home";

// All Recommendations
import Shop from "../pages/all-recommendations/All-Recommendations";

// Single Book
import SingleBook from "../pages/single-book/SingleBook";

// Dashboard Related
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";

// Search Results
import SearchResult from "../pages/searchresults/SearchResult";


import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";




  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/all-recommendations",
          element: <Shop/>
        },
        {
          path: "/book/:id",
          element:<SingleBook/>,
          loader:({params}) => fetch(`https://book-store-application-dufr.onrender.com/book/${params.id}`)
        },
        {
          path: "/search",
          element: <SearchResult/>
        },
        {
          path: "/sign-up",
          element: <Signup/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/logout",
          element: <Logout/>
        }
      ]
    },
    {
      path: "/admin/dashboard",
      element:<DashboardLayout/>,
      children: [
        {
          path : "/admin/dashboard",
          element: <PrivateRoute><Dashboard/></PrivateRoute>
        },
        {
          path : "/admin/dashboard/upload",
          element: <UploadBook/>
        },
        {
          path : "/admin/dashboard/manage",
          element: <ManageBooks/>
        },
        {
          path : "/admin/dashboard/edit-books/:id",
          element: <EditBooks/>,
          loader:({params}) => fetch(`https://book-store-application-dufr.onrender.com/book/${params.id}`)
        },
      ]
    },

  ]);

  export default router;