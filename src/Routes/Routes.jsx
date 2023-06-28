import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Layout/Main/Components/Home/Home";
import About from "../Layout/Main/Components/About/About";
import Skills from "../Layout/Main/Components/Skills/Skills";
import Projects from "../Layout/Main/Components/Projects/Projects";
import Footer from "../Layout/Main/Components/Footer/Footer";
import Contact from "../Layout/Main/Components/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "skills",
        element: <Skills></Skills>,
      },
      {
        path: "projects",
        element: <Projects></Projects>,
      },
      {
        path: "footer",
        element: <Footer></Footer>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
