import axios from 'axios';

const urlvar = 'https://new-beginnings-app.herokuapp.com'

// create user
export async function createUser(formData) {
    const { data } = await axios.post(`${urlvar}/user/signup`, formData)
    return data
}

// log in to user account
export async function loginToAccount(formData) {
    const { data } = await axios.post(`${urlvar}/user/login`, formData)
    return data
}

//crystalhome index route
export async function getIndexRoute() {
    const { data } = await axios.get(`${urlvar}/crystal`)
    return data
}

//add a crystal - admin function
export async function createCrystal(formData) {
    const crystalData = await axios.post(`${urlvar}/crystal/`, formData)
    return crystalData.data
}

//show a crystal
export async function showCrystal(id) {
    const crystalData = await axios.get(`${urlvar}/crystal/${id}`)
    return crystalData.data
}

//edit a crystal
export async function editCrystal(id) {
    const editedCrystalForm = await axios.get(`${urlvar}/crystal/${id}`)
    return editedCrystalForm.data
}

//update a crystal
export async function updateCrystal(id, formState) {
    const updatedCrystalForm = await axios.put(`${urlvar}/crystal/${id}`, formState)
    return updatedCrystalForm.data
}

//delete a crystal
export async function deleteCrystal(id) {
    const deletedCrystal = await axios.delete(`${urlvar}/crystal/${id}`)
    return console.log('crystal entry deleted!');
}

// create review
export async function createReview(id, formState) {
    const createdReview = await axios.put(`${urlvar}/crystal/${id}/review`, formState)
    return createdReview.data
};