import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../Components/PageNotFound";
import LandingPage from "../Page/LandingPage";
import LandingPageLayout from "../Layouts/LandingPageLayout";
import Login from "../Components/LandingPage Components/Login";
import Signup from "../Components/LandingPage Components/Signup";
import NotePage from "../Page/NotePage";
import ProtectedRoute from "../Utils/ProtectedRoute";
import Loading from "../Components/Loading";
import VerifyUser from "../Components/LandingPage Components/VerifyUser";

export const appRouteLayout = createBrowserRouter([
  {
    element: <LandingPageLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      {path:"/login",element:<Login/>},
      {path:"/signup",element:<Signup/>},
      {path:"/user/:userId/account/:token/verify",element:<VerifyUser/>}
    ],
  },
  {path:"/loading",element:<Loading/>},
  { path: "*", element: <PageNotFound /> },
  {path:"/note",element:< ProtectedRoute><NotePage/></ProtectedRoute>},
]);
