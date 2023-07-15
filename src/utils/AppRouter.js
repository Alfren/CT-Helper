import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root, BackfeedBreaker, Home } from "../pages";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/backfeed",
          element: <BackfeedBreaker />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
