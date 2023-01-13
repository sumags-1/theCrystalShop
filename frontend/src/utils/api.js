import axios from 'axios';

// create user
export async function createUser(formData) {
    const { data } = await axios.post('http://localhost:5001/user/signup', formData)
    return data
}

// log in to user account
export async function loginToAccount(formData) {
    const { data } = await axios.post('http://localhost:5001/user/login', formData)
    return data
}

// create a post
export async function createPost(formData) {
    const config = {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }
    const { data } = await axios.post('post', formData, config)
    return data
}