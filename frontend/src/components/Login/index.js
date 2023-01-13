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
                localStorage.username = data.user.username
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