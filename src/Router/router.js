import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../Components/PageNotFound";
import LandingPage from "../Page/LandingPage";



export const appRouteLayout = createBrowserRouter([
    {path:"/", element:<LandingPage/>},
    {path:"*", element:<PageNotFound/>},
    
])