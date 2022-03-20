import React from 'react';
import Tablet from '../Tablet/Tablet';

const DeviceDetail = (props) => {
    return (
        <div>
            <p>Price : {props.price}</p>
            <Tablet></Tablet>
        </div>
    );
};

export default DeviceDetail;