import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import ErrorPage from "./components/utils/Pages/ErrorPage";
import Layout from "./components/utils/Pages/Layout";
import NotFound from "./components/utils/Pages/NotFound";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        path : "/",
        element : <Layout />,
        errorElement : <ErrorPage />,
        children : [
            {
                index : true,
                path : "/home",
                element : <Home />
            },
            {
                path:'/login',
                element : <Login />
            },
            {
                path : "*", 
                element : <NotFound />
            }
        ]
    }
]);

export default router;