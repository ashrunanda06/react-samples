import React from 'react';
import '../card/Card.css';


const card = (props) => (
    <span
        className="card"
        onClick={props.deleteCard}>
        {props.url}
    </span>
);

export default card;