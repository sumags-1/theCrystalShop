
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
        navigate('/crystal');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" id="title" placeholder="Title of Review" onChange={handleChange} value={formState.title || ''} required />
                <br></br>
                <label>Rating:</label>
                <input type="text" id="rating" placeholder="Rating 1-5" onChange={handleChange} value={formState.rating || ''} />
                <br></br>
                <label>Content:</label>
                <textarea id="content" rows="5" cols="5" placeholder="Content" onChange={handleChange} value={formState.content}></textarea>
                <br></br>
                <label>Reviewer:</label>
                <input type="text" id="reviewer" placeholder="Reviewer" onChange={handleChange} value={formState.reviewer || ''} required />
                <br></br>
                <input type="submit"></input>
            </form>

            <br></br>
        </div>
    )
}