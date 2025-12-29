import { useAuth } from "../../context/AuthContext"


function Notification(){
    const [errors, setErrors] = useAuth();
    if(!errors){
        return null
    }

    return <>
        <div className="error-banner ">
            {errors}
            <div>
                <button className=""> X </button>
            </div>
        </div>
    </>
}