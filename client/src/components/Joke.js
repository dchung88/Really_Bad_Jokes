import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const JokeNote = props => {
    const [showThePunchLine, setShowThePunchLine] = useState(false);

    return (
        <div>
            <h2>{props.setup}</h2>
            <p onClick ={e => setShowThePunchLine(!showThePunchLine)}>
                {
                    showThePunchLine ?
                    props.punchline :
                    "click to reveal the punchline"
                }
            </p>
            {
                props.children
            }
        </div>
    );
}

const Joke = props => {
    
    const [jokes, setJokes] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:8000/api/jokes")
            .then(res => setJokes(res.data))
            .catch(err => console.log(err));
    }, []);

    const edit = _id => {
        navigate(`/edit/${_id}`)
    }

    return (
        <>
            {
                jokes.map( (j, i) =>
                <JokeNote key={i} setup={j.setup} punchline={j.punchline}>
                    <button onClick={ e => edit(j._id) }>Edit</button>
                </JokeNote>
                )
            }
        </>
    );
}

export default Joke;
