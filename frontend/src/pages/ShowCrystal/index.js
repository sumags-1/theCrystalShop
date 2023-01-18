import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { deleteCrystal } from "../../utils/api";
import CreateReview from "../../components/CreateReview";


export default function ShowCrystal({ shownCrystal, isLoggedIn }) {

    const initialState = []
    const [editDeleteOptions, setEditDeleteOptions] = useState(initialState)

    useEffect(() => {
        if (isLoggedIn) {
            if (localStorage.admin == 'yes') {
                // console.log("I can see this");
                setEditDeleteOptions(initialState.concat(
                    <div>
                        <Link to={"/editcrystal/" + shownCrystal._id}>Edit Crystal</Link>
                        <br></br>
                        <Link onClick={() => deleteCrystal(shownCrystal._id)} to='/crystal'>Delete Crystal</Link>
                        <br></br>
                        <Link to="/crystal">Back to Crystal list</Link>
                    </div>
                ))
            }
            else {
                setEditDeleteOptions(initialState.concat(
                    <div>
                        <Link to="/crystal">Back to Crystal list</Link>
                    </div>
                ))
            }
        }
    }, [isLoggedIn])


    const displayReview = (reviews) => {
        if (!shownCrystal.reviews) return null
        return reviews.map((review, i) => (
            <div key={i}>
                <p>{review.title}</p>
                <p>{review.content}</p>
                <p>{review.rating}</p>
                <p>{review.reviewer}</p>
            </div>
        ))
    }


    return (
        <div>
            <p>{shownCrystal.name} </p>
            {console.log(shownCrystal.image)}
            <img src={shownCrystal.image} alt="Crystals" width="350px"></img>
            <p>{shownCrystal.price}</p>
            <p>{shownCrystal.origin}</p>
            <p>{shownCrystal.size}</p>
            <p>{shownCrystal.shape}</p>
            <p>{shownCrystal.description}</p>
            <p>{shownCrystal.intentions}</p>
            <p>{shownCrystal.chakra}</p>
            <p>{shownCrystal.element}</p>
            <p>{shownCrystal.zodiac}</p>
            <p>Reviews:</p>
            <p>{displayReview(shownCrystal.reviews)}</p>

            <h2>Leave a Review!</h2>

            <br></br>

            <div>
                <CreateReview />
            </div>

            <br></br>
            {editDeleteOptions}

        </div>


    )
}