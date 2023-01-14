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
        <div className='nav-item' key='1'><img src="/assets/new-beginnings-logo.png" className="logo" alt="logo"></img></div>,

        <div className='nav-item' key='2'>
            <Link to='/'>
                <h4>New Beginnings</h4>
            </Link>
        </div>
    ]
    const [navItems, setNavItems] = useState(initialState)
   
    
    // add NavBar items to JSX array depending on App login state
    useEffect(() => {
        if (props.isLoggedIn) {
            if (localStorage.admin == 'yes'){
                setNavItems(initialState.concat(
                    <div className="nav-item menu-display" key='3'>
                        <div><p>for Admin ONLY</p></div>
                        <div><p>Logged in as {localStorage.username}</p></div>
                          <div>
                        <button onClick={() => { props.logout() }}>Log Out</button></div>
                    </div>
                ))
            } else {
            setNavItems(initialState.concat(
                <div className="nav-item menu-display" key='3'>
                    <div><p>Logged in as {localStorage.username}</p></div>
                    <div><button onClick={() => { props.logout() }}>Log Out</button></div>
                </div>
            ))}
        } else {
            setNavItems(initialState.concat([
                <div className="nav-item" key='3'>
                    <Link to='/user/login'>
                        Log In
                    </Link>
                </div>
            ]))
        }
    }, [props.isLoggedIn])

    // render JSX
    return (
        <nav>
            {navItems}
        </nav>
    )
}