import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { login, logout, signup } from "../services/authService";

export function useAuth() {

    const { user, setUser } = useContext(AuthContext);


    async function handelLogin(email, password) {
        const result =  await login(email, password)
        //console.log(result)
        if(result.status){
           window.location.href ='/'
        }
    }

    async function handelSignup(name, email, phone_no, dob, address, password) {
        const result = await signup(name, email, phone_no, dob, address, password);
        console.log(result);
        if(result.status){
            setUser(result.data)
            window.location.href ='/'
        }
    }

    async function handelLogout() {
        const result = await logout();
        setUser(null)
        console.log(result);
        
        window.location.href ='/login'
    }

    return { user, handelLogin, handelSignup, handelLogout }

}