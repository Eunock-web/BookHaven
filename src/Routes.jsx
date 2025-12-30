import AdminDashboard from "./components/pages/AdminDashboard";
import Home from "./components/pages/Home";
import Library from "./components/pages/Library";
import Login from "./components/pages/Login";
import BookDetail from "./components/utils/components/BookDetails";
import ErrorPage from "./components/utils/Pages/ErrorPage";
import Layout from "./components/utils/Pages/Layout";
import NotFound from "./components/utils/Pages/NotFound";
import { createBrowserRouter } from "react-router-dom";
import { useAuth } from "./context/AuthContext"; // Ajuste le chemin selon ton projet

const ProtectedAdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    
    // On attend que l'AuthContext ait fini de lire le localStorage
    if (loading) return null; // Ou un spinner de chargement

    if (!user || user.role !== 'admin') {
        return <Navigate to="/home" replace />;
    }
    
    return children;
};

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
                path:'/book/favorite',
                element : <Library />
            },

            {
                path : '/admin',
                element : (
                    <ProtectedAdminRoute>
                        <AdminDashboard />
                    </ProtectedAdminRoute>
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