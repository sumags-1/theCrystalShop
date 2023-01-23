// packages
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './style.css'
// components


export default function Home(props) {
    const navigate = useNavigate()

    // redirect to crystal home page if logged in
    useEffect(() => {
        if (props.isLoggedIn) {
            navigate('/crystalhome')
        }
    }, [props.isLoggedIn])

    // render JSX
    return (
        <div class="bg-gradient-to-b from-gray-900 to-slate-500 bg-cover mx-auto">
        <div class="container p-14 text-center shadow" >
            <h1 class="font-extrabold text-white text-3xl">Welcome to New Beginnings </h1>
            <p class="font-medium italic text-md text-white">Your one stop Crystal Shop !</p>
            <br></br>
            <h3 class="text-white">Do you wish to <Link to='/user/signup'><button class="p-1.5 italic">Sign Up</button></Link>, <Link to='/user/login'><button class="p-1.5 italic">Log In</button></Link> or <Link to='/crystalhome'><button class="p-1.5 italic">Browse as a guest</button></Link> ?</h3>
           <br></br>
           <img src='/assets/3d-white-crystals.jpg' alt='crystals' class="mx-auto"></img>
           </div>
           </div>
    )
}