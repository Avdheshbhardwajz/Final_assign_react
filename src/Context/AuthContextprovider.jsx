import { createContext , useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider ({children}){
    const [isAuth, setAuth] = useState({
        isAuth : false,
        token : ""
    })
    
    return(
        <AuthContext.Provider value={{isAuth , setAuth}} >
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider