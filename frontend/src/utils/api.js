import axios from 'axios';

// create user
export async function createUser(formData) {
    const { data } = await axios.post(`${process.env.APIURL}/user/signup`, formData)
    return data
}

// log in to user account
export async function loginToAccount(formData) {
    const { data } = await axios.post(`${process.env.APIURL}/user/login`, formData)
    return data
}

// // get user

// export async function getUserName() {
//     const config = {
//         headers:{
//             'Authorization': localStorage.getItem('token')
//         }
//     }
//     const userD = await axios.get("user", config)
//     // console.log(userD.data)
//     return userD.data
// }

//crystalhome index route
export async function getIndexRoute() {
    const { data } = await axios.get(`${process.env.APIURL}/crystal`)
    return data
}

//add a crystal - admin function
export async function createCrystal(formData) {
    const crystalData = await axios.post(`${process.env.APIURL}/crystal/`, formData)
    return crystalData.data
}

//show a crystal
export async function showCrystal(id) {
    const crystalData = await axios.get(`${process.env.APIURL}/crystal/${id}`)
    return crystalData.data
}

//edit a crystal
export async function editCrystal(id) {
    const editedCrystalForm = await axios.get(`${process.env.APIURL}/crystal/${id}`)
    return editedCrystalForm.data
}

//update a crystal
export async function updateCrystal(id, formState) {
    const updatedCrystalForm = await axios.put(`${process.env.APIURL}/crystal/${id}`, formState)
    return updatedCrystalForm.data
}

//delete a crystal
export async function deleteCrystal(id) {
    const deletedCrystal = await axios.delete(`${process.env.APIURL}/crystal/${id}`)
    return console.log('crystal entry deleted!');
}

// create review
export async function createReview(id, formState) {
    const createdReview = await axios.put(`${process.env.APIURL}/crystal/${id}/review`, formState)
    return createdReview.data
};