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
import ApplyedJob from "../pages/ApplyedJobs/ApplyedJobs";
import PrivateRoute from "./PrivateRoutes";
import EditPost from "../pages/CRUD/Edit/Edit";

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
        path: "/jobs/",
        element: <Jobs />,
      },
      {
        path: `/jobDetails/:id`,
        element: <JobDetails />,
        loader: ({ params }) =>
          fetch(`https://jobs-rvc2.onrender.com/jobs/${params.id}`),
      },
      {
        path: `/editjobpost/:id`,
        element: <EditPost />,
        loader: ({ params }) =>
          fetch(`https://jobs-rvc2.onrender.com/jobs/${params.id}`),
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
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/applyed-job",
        element: (
          <PrivateRoute>
            <ApplyedJob />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
