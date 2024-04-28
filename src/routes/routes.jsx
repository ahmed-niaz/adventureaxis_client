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
import Details from "../pages/Details";
import UpdateInfo from "../components/UpdateInfo";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch(`http://localhost:3000/landmarks`),
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
        loader: () => fetch(`http://localhost:3000/lists`),
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
        loader: () => fetch(`http://localhost:3000/landmarks`),
      },
      {
        path: "/details/:id",
        element: (
          <ProtectedRoutes>
            <Details />
          </ProtectedRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/landmarks/${params.id}`),
      },
      {
        path: '/update/:id',
        element: (
          <ProtectedRoutes>
            <UpdateInfo/>
          </ProtectedRoutes>
        ),
        loader: ({ params }) =>
        fetch(`http://localhost:3000/landmarks/${params.id}`),
      }
    ],
  },
]);
