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

//crystalhome index route
export async function getIndexRoute() {
    const { data } = await axios.get('http://localhost:5001/crystal')
    return data
}

//add a crystal - admin function
export async function createCrystal(formData) {
    const crystalData = await axios.post('http://localhost:5001/crystal/', formData)
    return crystalData.data
}

//show a crystal
export async function showCrystal(id) {
    const crystalData = await axios.get(`http://localhost:5001/crystal/${id}`)
    return crystalData.data
}

