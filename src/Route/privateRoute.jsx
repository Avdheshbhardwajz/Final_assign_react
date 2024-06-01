import { useContext } from "react"
import { AuthContext } from "../Context/AuthContextprovider"
import { Navigate } from "react-router-dom"

function PrivateRoute ({children}){
    const {isAuth} = useContext(AuthContext)    
    console.log(isAuth)

    return isAuth.isAuth ? children : <Navigate  to={"/Login"}/>
}

export default PrivateRoute