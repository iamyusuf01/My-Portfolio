import { createBrowserRouter, RouterProvider, ReactDom } from "react-router-dom";
import App from "../App";
import Body from "./Body";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/skills",
                element: <Skills />
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "/contacts",
                // element: <Contacts/>
            },
        ],
    },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);