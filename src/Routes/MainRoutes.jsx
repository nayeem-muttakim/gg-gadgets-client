import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import Main from "../LayOuts/Main";

export const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
  },
]);
