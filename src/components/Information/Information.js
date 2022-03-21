import React from 'react';
import { addToDb } from '../utilities/fakeDB';

const Information = (props) => {
    const { name, price, id } = props.information;

    const addToCart = id => {
        addToDb(id);
    }
    return (
        <div>
            <h4>Name : {name}</h4>
            <p>Price: $ {price}</p>
            <small>It has ID: {id}</small><br></br>
            <button onClick={() => addToCart(id)}>Add  To Cart</button>
        </div>
    );
};

export default Information;