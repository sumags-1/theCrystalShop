// packages
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// components
import Login from "../../components/Login";
import SignUp from "../../components/SignUp";

export default function Home(props) {
    const [form, setForm] = useState('login')

    const navigate = useNavigate()

    // redirect to feed page if logged in
    useEffect(() => {
        if (props.isLoggedIn) {
            navigate('/crystal')
        }
    }, [props.isLoggedIn])

    // render JSX
    return (
        <main>
            <button onClick={() => setForm('login')}>
                Log In
            </button>

            <button onClick={() => setForm('signup')}>
                Sign Up
            </button>

            <br />
            <br />

            {form === 'login' && <Login setLogInStatus={props.setLogInStatus} />}
            {form === 'signup' && <SignUp setLogInStatus={props.setLogInStatus} />}
        </main>
    )
}