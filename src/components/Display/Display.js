import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
    //console.log(props);
    return (
        <div style={{ border: '2px solid blue', margin: '10px' }}>
            <h2>Name: {props.name}</h2>
            <p>Today steps is : {props.steps}</p>
            <Dial steps={props.steps}></Dial>
        </div>
    );
};

export default Display;     