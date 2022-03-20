import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';
import { sum } from '../utilities/calculate';

const num1 = 20;
const num2 = 10;
const total = sum(num1, num2);

const Watch = () => {
    const [steps, setSteps] = useState(0)
    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
    }
    useEffect(() => {
        // console.log(steps);
    }, [steps])

    return (
        <div style={{ border: '2px solid purple', margin: '20px' }}>
            <h3>This is my smart Watch</h3>
            <p>Price is : {total}</p>
            <p>My current steps : {steps}</p>
            <button onClick={increaseSteps}>Run</button>
            <Display name="Provashish" steps={steps}></Display>
        </div>
    );
};

export default Watch;