import React from 'react';

const Information = (props) => {
    const { name, price, id } = props.information;
    return (
        <div>
            <h4>Name : {name}</h4>
            <p>Price: $ {price}</p>
            <small>It has ID: {id}</small>
        </div>
    );
};

export default Information;