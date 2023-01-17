import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";


export default function ShowCrystal({ shownCrystal }) {


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

        </div>

    )
}