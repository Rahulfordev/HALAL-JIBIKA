import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Jobs from "../components/Jobs";
import About from "../components/About";
import Contact from "../components/Contact";
import Favorite from "../components/Favorite";
import Signup from "../components/Signup"; 
import SignIn from "../components/SignIn";

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
        path: '/login',
        element: <SignIn />
      }
    ],
  },
]);

export default routes;
