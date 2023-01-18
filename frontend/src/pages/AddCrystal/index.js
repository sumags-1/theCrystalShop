import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCrystal } from "../../utils/api";

function AddCrystal() {

    const [formState, setFormState] = useState({})
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        createCrystal(formState);
        navigate('/crystal');
    }

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.id]: event.target.value })
    }

    return (
        <div>
            <h2 className="text-blue-600">Add a Crystal</h2><br></br>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" id="name" placeholder="Crystal Name" onChange={handleChange} value={formState.name || ''} required />

                <br></br>
                <label>Origin:</label>
                <input type="text" id="origin" placeholder="Origin of Crystal" onChange={handleChange} value={formState.origin || ''} />

                <br></br>
                <label>Size:</label>
                <input type="text" id="size" placeholder="Size of Crystal" onChange={handleChange} value={formState.size || ''} required />

                <br></br>
                <label>Shape:</label>
                <input type="text" id="shape" placeholder="Shape of Crystal" onChange={handleChange} value={formState.shape || ''} required />

                <br></br>
                <label>Description:</label>
                <textarea id="description" rows="5" cols="5" onChange={handleChange} value={formState.description || ''} ></textarea>

                <br></br>
                <label>Intentions:</label>
                <input type="text" id="intentions" placeholder="Intentions for which Crystal is used" onChange={handleChange} value={formState.intentions || ''} />

                <br></br>
                <label>Surface:</label>
                <select id="surface" onChange={handleChange} value={formState.surface}>
                    <option value="Polished">Polished</option>
                    <option value="Raw">Raw</option>
                    <option value="Jewelry">Jewelry</option>
                </select>

                <br></br>
                <label>Chakra:</label>
                <select id="chakra" onChange={handleChange} value={formState.chakra}>
                    <option value="Root">Root</option>
                    <option value="Sacral">Sacral</option>
                    <option value="Solar Plexus">Solar Plexus</option>
                    <option value="Heart">Heart</option>
                    <option value="Throat">Throat</option>
                    <option value="Third eye">Third Eye</option>
                    <option value="Crown">Crown</option>
                </select>

                <br></br>
                <label>Zodiac:</label>
                <select id="zodiac" onChange={handleChange} value={formState.zodiac}>
                    <option value="All signs">All Signs</option>
                    <option value="Aries">Aries</option>
                    <option value="Taurus">Taurus</option>
                    <option value="Gemini">Gemini</option>
                    <option value="Cancer">Cancer</option>
                    <option value="Leo">Leo</option>
                    <option value="Virgo">Virgo</option>
                    <option value="Libra">Libra</option>
                    <option value="Scorpio">Scorpio</option>
                    <option value="Sagittarius">Sagittarius</option>
                    <option value="Capricorn">Capricorn</option>
                    <option value="Aquarius">Aquarius</option>
                    <option value="Pisces">Pisces</option>
                </select>

                <br></br>
                <label>Element:</label>
                <select id="element" onChange={handleChange} value={formState.element}>
                    <option value="Fire">Fire</option>
                    <option value="Earth">Earth</option>
                    <option value="Air">Air</option>
                    <option value="Water">Water</option>
                </select>

                <br></br>
                <label>Price in $</label>
                <input type="text" id="price" placeholder="Price per piece" onChange={handleChange} value={formState.price || ''} required />

                <br></br>
                <label>Image:</label>
                <input type="text" id="image" placeholder="Image" onChange={handleChange} value={formState.image || ''}  />

                <br></br>
                <input type="submit"></input>

            </form>
        </div>

    )
}
export default AddCrystal

