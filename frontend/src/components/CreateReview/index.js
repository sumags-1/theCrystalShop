
// DEPENDENCIES
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// FUNCTIONS
import { createReview } from '../../utils/api';
// STYLES
// import './style.css';

export default function CreateReview() {

    // STATE
    const [formState, setFormState] = useState({})
    const navigate = useNavigate()
    const { id } = useParams()

    function handleChange(event) {
        setFormState({ ...formState, [event.target.id]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createReview(id, formState);
        navigate('/crystalhome');
    };

    return (
        <div class="w-1/3">
            <form onSubmit={handleSubmit}>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-800 font-normal md:text-right mb-1 md:mb-0 pr-4" htmlFor="title">
                            Review Title:
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input required class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-fit py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black" type="text" id="title" placeholder="Title of Review" onChange={handleChange} value={formState.title || ''} />
                    </div>
                </div>

                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-800 font-normal md:text-right mb-1 md:mb-0 pr-4" htmlFor="rating">
                            How do you rate this product ?:
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <select id="rating" onChange={handleChange} value={formState.rating} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-fit py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black">
                            <option>Rating from 1-5</option>
                            <option value="1">1 - not so good</option>
                            <option value="2">2 - okayyy</option>
                            <option value="3">3 - liked it</option>
                            <option value="4">4 - love it</option>
                            <option value="5">5 - AWESOME product</option>
                        </select>
                    </div>
                </div>

                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-800 font-normal md:text-right mb-1 md:mb-0 pr-4" htmlFor="content">
                            Pls explain your rating:
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <textarea class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-fit py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black" id="content" rows="8" cols="20" placeholder="Content" onChange={handleChange} value={formState.content} ></textarea>
                    </div>
                </div>

                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-800 font-normal md:text-right mb-1 md:mb-0 pr-4" htmlFor="reviewer">
                            Reviewer:
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-fit py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black" type="text" id="reviewer" placeholder="Reviewer" onChange={handleChange} value={formState.reviewer || ''} />
                    </div>
                </div>
                <div class="md:flex md:items-center">
                    <div class="mx-auto">
                        <input type="submit" class="shadow bg-slate-700 hover:bg-slate-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" />
                    </div>
                </div>
            </form>

            <br></br>
        </div>
    )
}