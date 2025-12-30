import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import BookDetail from "./components/utils/components/BookDetails";
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
                element : <Home />
            },
            {
                path : "/home",
                element : <Home />
            },
            {
                path:'/login',
                element : <Login />
            },

            {
                path:'/book/:id',
                element : <BookDetail />
            },

            {
                path : "*", 
                element : <NotFound />
            }
        ]
    }
]);

export default router;