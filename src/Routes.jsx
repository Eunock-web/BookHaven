import Home from "./components/pages/Home";
import Library from "./components/pages/Library";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import BookDetail from "./components/utils/components/BookDetails";
import PrivateRoute from "./components/utils/components/PrivateRoute";
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
                path : "/login",
                element : <Login />
            },
            {
                path : "/register",
                element : <Register />
            },
            {
                path : "/book/:id",
                element : <BookDetail />
            },
            {
                path : "/book/favorite",
                element : (
                    <PrivateRoute>
                        <Library />
                    </PrivateRoute>
                )
            },
            {
                path : "*",
                element : <NotFound />
            }
        ]
    }
]);

export default router;
