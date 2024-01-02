import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Jobs from "../pages/Jobs/Jobs";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Favorite from "../pages/Favorite/Favorite";
import SignIn from "../pages/SignIn/SignIn";
import Signup from "../pages/SignUp/SignUp";
import JobDetails from "../pages/JobDetails/JobDetails";
import NotFound from "../pages/NotFound/NotFound";
import AddJob from "../pages/CRUD/AddJob/AddJob";
// import PrivateRoute from "./PrivateRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: `/jobdetails/:id`,
        element: <JobDetails />,
        loader: () => fetch("http://localhost:9000/jobs"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/post-a-job",
        element: <AddJob />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
