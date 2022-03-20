import React from 'react';

const Cosmetic = (props) => {
    const {name , price, id} = props.cosmetic;
    return (
        <div>
            <h4>Name : {name}</h4>
            <p>Price is : {price}</p>
            <small>it has id: {id}</small>
        </div>
    );
};

export default Cosmetic;