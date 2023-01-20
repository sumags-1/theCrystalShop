import { useState, useEffect } from 'react';
import { loginToAccount } from '../../utils/api';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
    const [formData, setFormData] = useState({ username: '', password: '' })
    const navigate = useNavigate()

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        loginToAccount(formData)
            .then((data) => {
                localStorage.username = data.username
                localStorage.admin = data.admin
                localStorage.token = data.token
                props.setLogInStatus(true)
            })
    }

    // redirect to home page if logged in
    useEffect(() => {
        if (props.isLoggedIn) {
            navigate('/crystal')
        }
    }, [props.isLoggedIn])

    return (
        <div class="mx-auto border-black border-2 border-solid w-1/4 text-center">
            <form>
                <h1>Log In</h1>
                <label htmlFor='username'>User Name:</label>
                <input class="w-32 border-black border-1 border-solid" type='text' id='username' name='username' placeholder="Enter username" value={formData.username} onChange={handleChange} required />
                <br></br>
                <label htmlFor='password'>Password:</label>
                <input class="w-32 border-black border-1 border-solid" type='password' id='password' name='password' placeholder="Enter password" value={formData.password} onChange={handleChange} required />
                <br></br>
                <button class="w-16 border-black border-1 border-solid" onClick={handleSubmit}>Log In</button>
            </form>
        </div>
    )
}