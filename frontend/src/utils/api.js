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

// // get user

// export async function getUserName() {
//     const config = {
//         headers:{
//             'Authorization': localStorage.getItem('token')
//         }
//     }
//     const userD = await axios.get("http://localhost:5001/user", config)
//     // console.log(userD.data)
//     return userD.data
// }

