import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";


export default function ShowCrystal({shownCrystal, crystals}) {




    return (
        <p>{shownCrystal.name} </p>


    )
}