import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { deleteCrystal } from "../../utils/api";
import CreateReview from "../../components/CreateReview";


export default function ShowCrystal({ shownCrystal, crystals, setCrystals, isLoggedIn }) {

    const initialState = []
    const [editDeleteOptions, setEditDeleteOptions] = useState(initialState)

    useEffect(() => {
        if (isLoggedIn) {
            if (localStorage.admin == 'yes') {

                setEditDeleteOptions(initialState.concat(
                    <div key='1'>
                        <div class="w-32 inline-block shadow bg-slate-700 hover:bg-slate-400 focus:shadow-outline focus:outline-none text-white font-bold m-4 py-2 px-4 rounded">
                            <Link to={`/editcrystal/${shownCrystal._id}`}>Edit Crystal</Link>
                        </div>

                        <div class="w-fit inline-block shadow bg-slate-700 hover:bg-slate-400 focus:shadow-outline focus:outline-none text-white font-bold m-4 py-2 px-4 rounded">
                            <Link onClick={() => {
                                deleteCrystal(shownCrystal._id)
                                const updatedArray = [...crystals] //updates list of crystals on Home page
                                for (let i = 0; i < updatedArray.length; i++) {
                                    if (updatedArray[i]._id === shownCrystal._id) {
                                        updatedArray.splice(i, 1)
                                    }
                                }
                                setCrystals(updatedArray)
                            }
                            }
                                to='/crystalhome'>Delete Crystal</Link>
                        </div>
                        <div class="w-fit shadow inline-block bg-slate-700 hover:bg-slate-400 focus:shadow-outline focus:outline-none text-white font-bold m-4 py-2 px-4 rounded">
                            <Link to="/crystalhome">Back to Crystal list</Link>
                        </div>
                    </div >
                ))
            }
            else {
                setEditDeleteOptions(initialState.concat(
                    <div key='2'>
                        <div class="w-fit shadow inline-block bg-slate-700 hover:bg-slate-400 focus:shadow-outline focus:outline-none text-white font-bold m-4 py-2 px-4 rounded">

                            <Link to="/crystalhome">Back to Crystal list</Link>
                        </div>
                    </div>
                ))
            }
        }
    }, [isLoggedIn, shownCrystal._id])


    const displayReview = (reviews) => {
        if (!shownCrystal.reviews) return null
        return reviews.map((review, i) => (
            <div key={i} class="mb-3 p-3">
                <p>Title: {review.title}</p>
                <p>Content: {review.content}</p>
                <p>Rating (out of 5):{review.rating}</p>
                <p>Reviewer: {review.reviewer}</p>
            </div>
        ))
    }


    return (
        <main>
            <div class="mx-auto">
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3 m-4 p-4">
                        <img src={shownCrystal.image} alt="Crystals"></img>
                    </div>
                    <div class="md:w-2/3 m-4 p-4 leading-10">
                        <p class="font-bold text-lg">{shownCrystal.name}</p>
                        <p>Price: {shownCrystal.price}</p>
                        <p>Size: {shownCrystal.size}</p>
                        <p>Shape: {shownCrystal.shape}</p>
                        <p>Use me for these Intentions: {shownCrystal.intentions}</p>
                        <p>Best for this Chakra: {shownCrystal.chakra}</p>
                        <p>This is my element: {shownCrystal.element}</p>
                        <p>I suit this zodiac sign the best:{shownCrystal.zodiac}</p>

                    </div>
                </div>
                <div class="mb-4 p-4 leading-6">
                    <p>Origin of Crystal: {shownCrystal.origin}</p>
                    <p>Detailed Description: {shownCrystal.description}</p>
                </div>
            </div>


            <div class="m-2 p-2">
                <p class="font-medium">Use the form below to leave a Review:</p>

                <CreateReview />
            </div>

            <div class="m-2 p-2">
                <p class="font-bold">Reviews from customers:</p>
                <div>{displayReview(shownCrystal.reviews)}</div>
            </div>

            {editDeleteOptions}

        </main>


    )
}