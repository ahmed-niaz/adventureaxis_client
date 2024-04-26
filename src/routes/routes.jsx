import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import AllTouristSpots from "../pages/AddTouristSpot";
import AddTouristSpot from "../pages/AddTouristSpot";
import MyList from "../pages/MyList";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ProtectedRoutes from "./ProtectedRoutes";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <PageNotFound/>,
      children: [
        {
            index: true,
            element: <Home/>,
        },
        {
            path: '/tourist-spots',
            element: <AllTouristSpots/>,
        },
        {
            path: '/add-tourist-spots',
            element: <ProtectedRoutes><AddTouristSpot/></ProtectedRoutes>
        },
        {
            path: '/lists',
            element: <ProtectedRoutes> <MyList/></ProtectedRoutes>
        },
        {
            path:'/register',
            element: <Register/>
        },
        {
            path: 'login',
            element: <Login/>
        }
      ]
    },
  ]);