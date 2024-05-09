import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../Components/PageNotFound";
import LandingPage from "../Page/LandingPage";
import LandingPageLayout from "../Layouts/LandingPageLayout";
import Login from "../Components/LandingPage Components/Login";
import Signup from "../Components/LandingPage Components/Signup";

export const appRouteLayout = createBrowserRouter([
  {
    element: <LandingPageLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      {path:"/login",element:<Login/>},
      {path:"/signup",element:<Signup/>}
      
      
    ],
  },
  { path: "*", element: <PageNotFound /> },
]);
