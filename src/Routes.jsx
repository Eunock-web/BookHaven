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
                path : "/home",
                element : <NotFound />
            } 
        ]
    }
]);

export default router;