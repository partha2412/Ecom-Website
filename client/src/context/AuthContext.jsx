import { useEffect, createContext, useState } from "react";
import { getme } from "../services/authService";

export const AuthContext = createContext(null)


export function AuthProvider({ children }) {
    const [user, setUser] = useState();

    useEffect(() => {
        async function fetchUser() {
            try {
                const data = await getme();
                setUser(data);
                console.log("User fetched:", data);
            } catch (err) {
                console.error("Failed to fetch user:", err);
            }
        }
        fetchUser();
    }, []); // run once on mount

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}