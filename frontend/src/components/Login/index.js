import { useState, useEffect } from 'react';
import { loginToAccount } from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import './style.css'

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
            navigate('/crystalhome')
        }
    }, [props.isLoggedIn])

    return (
        <div class="parent w-full text-center mt-10">
                <form class="mx-auto text-center child shadow-md px-10 border-black border-1 border-solid rounded">
                    <div class="mb-4 p-4 text-center text-xl font-semibold">
                        LOG IN TO YOUR ACCOUNT</div>
                    <div class="mb-4 p-4 space-x-2">
                        <label htmlFor='username' class="block text-md font-bold mb-2">User Name</label>
                        <input class="shadow border rounded py-3 px-3 w-40 leading-tight focus: shadow-outline" type='text' id='username' name='username' placeholder="Enter username" value={formData.username} onChange={handleChange} required />
                    </div>
                    <div class="p-4 mb-4 space-x-2">
                        <label htmlFor='password' class="block text-md font-bold mb-2">Password</label>
                        <input class="shadow border rounded py-3 px-3 w-40 leading-tight focus: shadow-outline" type='password' id='password' name='password' placeholder="Enter password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <div class="mx-auto mb-4 p-4 w-fit bg-gray-700 rounded text-center text-white">
                        <button class="w-16 border-black border-1 border-solid" onClick={handleSubmit}>Log In</button></div>
                <br></br>
                </form>
           </div>
    )
}