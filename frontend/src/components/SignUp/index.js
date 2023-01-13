import { useState } from 'react';
import { createUser } from '../../utils/api';

export default function SignUp(props) {
    const [formData, setFormData] = useState({ username: '', password: '' })

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        createUser(formData)
            .then((data) => {
                localStorage.token = data.token
                props.setLogInStatus(true)
            })
    }

    return (
        <form>
            <h1>Sign Up</h1>
            <label htmlFor='username'>User Name:</label>
            <input type='text' name='username' value={formData.username} onChange={handleChange} required />

            <label htmlFor='password'>Password:</label>
            <input type='password' name='password' value={formData.password} onChange={handleChange} required />

            <button onClick={handleSubmit}>Sign Up</button>
        </form>
    )
}