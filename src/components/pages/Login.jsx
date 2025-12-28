import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const {login} = useAuth();

    const handleSubmit = (e)=>{
        e.preventDefault;

        const result = login(email, password);

        if(!result){
            return  
        }
    }
    return <>
    
    </>
}

export default Login;