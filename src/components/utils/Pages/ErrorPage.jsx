import { Link, useRouteError } from "react-router-dom"

function ErrorPage(){
    const error = useRouteError();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center p-8">
            <h1 className="text-3xl font-bold text-blue-950">Une erreur est survenue</h1>
            <p className="text-gray-500">{error?.statusText || error?.message || "Veuillez réessayer plus tard."}</p>
            <Link to="/home" className="text-blue-950 font-bold hover:underline">Retour à l'accueil</Link>
        </div>
    )
}

export default ErrorPage
