import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCrystal } from "../../utils/api";
import './style.css'

function AddCrystal() {

    const [formState, setFormState] = useState({})
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        createCrystal(formState);
        navigate('/crystalhome');
    }

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.id]: event.target.value })
    }

    return (
        <div class="parent">

            <form class="child w-full max-w-sm text-center" onSubmit={handleSubmit}>
                <h2 class="font-black text-3xl tracking-wide">ADD A CRYSTAL</h2><br></br>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
                            Crystal Name:
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input required class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black" type="text" id="name" placeholder="Crystal Name" onChange={handleChange} value={formState.name || ''} />
                    </div>
                </div>

                <br></br>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="origin">
                            Origin:
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black" type="text" id="origin" placeholder="Origin of Crystal" onChange={handleChange} value={formState.origin || ''} />
                    </div>
                </div>

                <br></br>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="size">
                            Size of Crystal:
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input required class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black" type="text" id="size" placeholder="Size of Crystal" onChange={handleChange} value={formState.size || ''} />
                    </div>
                </div>


                <br></br>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="shape">
                            Shape of Crystal:
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input required class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black" type="text" id="shape" placeholder="Shape of Crystal" onChange={handleChange} value={formState.shape || ''} />
                    </div>
                </div>


                <br></br>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="description">
                            Description:
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <textarea class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black" id="description" rows="10" cols="20" onChange={handleChange} value={formState.description || ''} ></textarea>
                    </div>
                </div>


                <br></br>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="intentions">
                            Intentions:
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black" type="text" id="intentions" placeholder="Intentions for which Crystal is used" onChange={handleChange} value={formState.intentions || ''} />
                    </div>
                </div>

                <br></br>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="surface">
                            Surface:
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <select id="surface" onChange={handleChange} value={formState.surface} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black">
                            <option>Surface of crystal</option>
                            <option value="Polished">Polished</option>
                            <option value="Raw">Raw</option>
                            <option value="Jewelry">Jewelry</option>
                        </select>
                    </div>
                </div>

                <br></br>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="chakra">
                            Chakra:
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <select id="chakra" onChange={handleChange} value={formState.chakra} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black">
                            <option>Chakra that crystal affects</option>
                            <option value="Root">Root</option>
                            <option value="Sacral">Sacral</option>
                            <option value="Solar Plexus">Solar Plexus</option>
                            <option value="Heart">Heart</option>
                            <option value="Throat">Throat</option>
                            <option value="Third eye">Third Eye</option>
                            <option value="Crown">Crown</option>
                        </select>
                    </div>
                </div>

                <br></br>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="zodiac">
                            Zodiac:
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <select id="zodiac" onChange={handleChange} value={formState.zodiac} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black">
                            <option>Zodiac signs that crystal affects</option>
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
                    </div>
                </div>

                <br></br>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="element">
                            Element:
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <select id="element" onChange={handleChange} value={formState.element} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black">
                            <option>Element that crystal belongs to</option>
                            <option value="Fire">Fire</option>
                            <option value="Earth">Earth</option>
                            <option value="Air">Air</option>
                            <option value="Water">Water</option>
                        </select>
                    </div>
                </div>

                <br></br>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="price">
                            Price in $:
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black" type="text" id="price" placeholder="Price per piece" onChange={handleChange} value={formState.price || ''} required />
                    </div>
                </div>

                <br></br>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="image">
                            Crystal Image:
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black" type="text" id="image" placeholder="Image" onChange={handleChange} value={formState.image || ''} />
                    </div>
                </div>
                <br></br>
                <div class="md:flex md:items-center">
                    <div class="md:w-1/3"></div>
                    <div class="md:w-2/3">
                        <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded" type="button">
                            SUBMIT
                        </button>
                    </div>
                </div>

            </form>
        </div>

    )
}
export default AddCrystal

