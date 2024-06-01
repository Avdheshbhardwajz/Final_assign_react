import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContextprovider";
import { useToast } from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const { isAuth, setAuth } = useContext(AuthContext);
    const toast = useToast();
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const AuthForm = (e) => {
        e.preventDefault();  // Prevent form submission from reloading the page

        const authpromise = new Promise((resolve, reject) => {
            axios.post("https://reqres.in/api/login", {
                email: 'eve.holt@reqres.in',
                password: 'pistol'
            })
                .then((res) => {
                    if (res.data.token) {
                        resolve("ok");
                        setAuth({
                            isAuth: true,
                            token: res.data.token,
                            Username: email
                        });
                        console.log(isAuth);
                    } else {
                        reject('Unknown error');
                    }
                })
                .catch((error) => {
                    setError(true);
                    reject(error);
                });
        });

        toast.promise(authpromise, {
            success: { title: 'Login Successful', description: "We've successfully logged into your account." },
            error: { title: 'Login Failed - Check Network', description: 'Sorry, please try again.' },
            loading: { title: 'Logging In', description: 'Please wait' },
        });
        navigate("/")
    };

    return (
        <>
            <center>
                <form className="form" onSubmit={AuthForm}>
                    <p className="form-title">Sign in to your account</p>
                    <div className="input-container">
                        <input
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <span></span>
                    </div>
                    <div className="input-container">
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submit">
                        Sign in
                    </button>
                    <p className="signup-link">
                        No account?
                        Toh admin se bolo banane ko
                    </p>
                </form>
            </center>
        </>
    );
}

export default Login;
