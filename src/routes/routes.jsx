import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import AddTouristSpot from "../pages/AddTouristSpot";
import MyList from "../pages/MyList";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import AllTouristSpots from "../pages/AllTouristSpots";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: ()=> fetch(`http://localhost:3000/landmarks`),
      },

      {
        path: "/add-tourist-spots",
        element: (
          <ProtectedRoutes>
            <AddTouristSpot />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/lists",
        element: (
          <ProtectedRoutes>
            {" "}
            <MyList />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/spots",
        element: <AllTouristSpots />,
      },
    ],
  },
]);
