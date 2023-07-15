import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Root, Main} from "../pages";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Main />,
        }
      ],
    },
  ]);
  return (
    <RouterProvider
      router={router}
      // fallbackElement={<BigSpinner />}
    />
  )
}
