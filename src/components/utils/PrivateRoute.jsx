import { useAuth } from "../../context/AuthContext";

function PrivateRoute({children}){
    const {user} = useAuth()

    if(!user){
        return <h1></h1>
    }
    return children;
}

export default PrivateRoute;