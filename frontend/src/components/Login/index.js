import { useState } from 'react';
import { loginToAccount } from '../../utils/api';

export default function Login(props) {
    const [formData, setFormData] = useState({ username: '', password: '' })

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        loginToAccount(formData)
            .then((data) => {
                localStorage.token = data.token
                props.setLogInStatus(true)
            })
    }

    return (
        <form>
            <h1>Log In</h1>
            <label htmlFor='username'>User Name:</label>
            <input type='text' name='username' value={formData.username} onChange={handleChange} required />

            <label htmlFor='password'>Password:</label>
            <input type='password' name='password' value={formData.password} onChange={handleChange} required />

            <button onClick={handleSubmit}>Log In</button>
        </form>
    )
}