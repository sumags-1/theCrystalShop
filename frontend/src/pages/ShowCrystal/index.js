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
            // console.log(shownCrystal)
            if (localStorage.admin == 'yes') {
                // console.log(shownCrystal._id);

                setEditDeleteOptions(initialState.concat(
                    <div key='1'>
                        <Link to={`/editcrystal/${shownCrystal._id}`}>Edit Crystal</Link>
                        <br></br>
                        <Link onClick={() => 
                            deleteCrystal(shownCrystal._id)
                        //use same as edit for renewing crystals page    
                        } 
                            to='/crystalhome'>Delete Crystal</Link>
                        <br></br>
                        <Link to="/crystalhome">Back to Crystal list</Link>
                    </div>
                ))
            }
            else {
                setEditDeleteOptions(initialState.concat(
                    <div key='2'>
                        <Link to="/crystalhome">Back to Crystal list</Link>
                    </div>
                ))
            }
        }
    }, [isLoggedIn, shownCrystal._id])


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
        <main>
            {/* <img src='/assets/amethyst-bracelet.jpeg'></img> */}
            <p>{shownCrystal.name} </p>
            {/* {console.log(shownCrystal.image)} */}
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
            <div>{displayReview(shownCrystal.reviews)}</div>

            <h2>Leave a Review!</h2>

            <br></br>

        
                <CreateReview />
        

            <br></br>
            {editDeleteOptions}

        </main>


    )
}