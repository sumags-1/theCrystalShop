// packages
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// components
// import Login from "../../components/Login";
// import SignUp from "../../components/SignUp";

export default function Home(props) {
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
            <h3>Welcome to New Beginnings.. Do you wish to <Link to='/user/signup'>Sign Up</Link>, <Link to='/user/login'>Log In</Link> or <Link to='/crystal'>Browse</Link> as a guest ?</h3>
           </main>
    )
}