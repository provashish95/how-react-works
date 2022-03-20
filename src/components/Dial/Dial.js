import React from 'react';

const Dial = (props) => {
    //console.log(props);
    return (
        <div style={{ border: '3px solid green', margin: '20px' }}>
            <h4>This is dial</h4>
            <h5>Steps so far : {props.steps}</h5>
        </div>
    );
};

export default Dial;