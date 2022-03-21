import React from 'react';
import { addToDb, deleteCart, removeCart } from '../utilities/fakeDB';

const Information = (props) => {
    const { name, price, id } = props.information;

    const addToCart = id => {
        addToDb(id);
    }
    const removeFromDb = id => {
        removeCart(id);
    }
    const deleteCartFromDb = () => deleteCart();
    return (
        <div>
            <h4>Name : {name}</h4>
            <p>Price: $ {price}</p>
            <small>It has ID: {id}</small><br></br>
            <button onClick={() => addToCart(id)}>Add  To Cart</button>
            <button onClick={() => removeFromDb(id)}>Remove Item</button>
            <button onClick={deleteCartFromDb}>Delete Cart</button>
        </div>
    );
};

export default Information;