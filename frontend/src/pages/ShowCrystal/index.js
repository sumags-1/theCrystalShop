import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { deleteCrystal } from "../../utils/api";
import CreateReview from "../../components/CreateReview";


export default function ShowCrystal({ shownCrystal }) {

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
            <img src={shownCrystal.image} width="350px"></img>
            <p>{shownCrystal.name} </p>
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

            <div>
                <Link to={"/editcrystal/" + shownCrystal._id}>Edit Crystal</Link>
                <br></br>
                <Link onClick={() => deleteCrystal(shownCrystal._id)} to='/crystal'>Delete Crystal</Link> <br></br>
            </div>
        </div>


    )
}