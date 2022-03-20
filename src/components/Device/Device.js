import React from 'react';
import DeviceDetail from '../DeviceDetail/DeviceDetail';
import { mul } from '../utilities/calculate';


const num1 = 20;
const num2 = 10;
const total = mul(num1 , num2);
const Device = (props) => {
    return (
        <div>
            <h1>I have : {props.name}</h1>
            <DeviceDetail price={props.price}></DeviceDetail>
            <p>BDT: {total}</p>
        </div>
    );
};

export default Device;