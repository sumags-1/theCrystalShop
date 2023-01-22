// packages
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getUserName } from '../../utils/api';
// styles
import './styles.css'

export default function Nav(props) {
    // state declaration: build JSX array of NavBar items
    const initialState = [
        // <div class='nav-item' key='1'><img src="/assets/pexels-eva-bronzini-6474409.jpg" className="logo" alt="logo"></img></div>,

        <div class='nav-item text-4xl text-left' key='1'>
            <Link to='/'>
                <h4>New Beginnings</h4>
            </Link>
        </div>
    ]
    const [navItems, setNavItems] = useState(initialState)


    // add NavBar items to JSX array depending on App login state
    useEffect(() => {
        if (props.isLoggedIn) {
            if (localStorage.admin == 'yes') {
                setNavItems(initialState.concat(

                    <div class="nav-item menu-display" key='2'>
                        For Admins Only: <Link to="/crystalhome/addcrystal">Add a Crystal</Link></div>,
                    <div class="nav-item menu-display" key='3'><p>Logged in as {localStorage.username}</p>
                        <button onClick={() => { props.logout() }}>Log Out</button>
                    </div>
                ))
            } else {
                setNavItems(initialState.concat(
                    <div className="nav-item menu-display" key='2'>
                        <p>Logged in as {localStorage.username}</p>
                        <button onClick={() => { props.logout() }}>Log Out</button></div>

                ))
            }
        } else {
            setNavItems(initialState.concat([
                <div class="nav-item" key='3'>
                    <Link to='/user/login'>
                        Log In
                    </Link>
                </div>
            ]))
        }
    }, [props.isLoggedIn])

    // render JSX
    return (
        <nav class="bg-gray-300">
            {navItems}
        </nav>
    )
}