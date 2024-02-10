import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Result from "../pages/Result";
import Layout from "../Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/result",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Result />,
      },
    ],
  },
]);
