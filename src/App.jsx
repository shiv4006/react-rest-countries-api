/* eslint-disable no-unused-vars */
import { children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppLayout } from "./Pages/AppLayout"
import { Home } from "./Pages/Home"
import { Detailed } from "./Pages/Detailed"
import { getAPIData, getAPIDataName } from "./API/GetAPIData";

const App = () => {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: getAPIData, // getting data from api
        },
        {
          path: "/:countryName",
          element: <Detailed />,
          loader: getAPIDataName,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />
}

export default App
