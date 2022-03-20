import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

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
            <p>My current steps : {steps}</p>
            <button onClick={increaseSteps}>Run</button>
            <Display name="Provashish" steps={steps}></Display>
        </div>
    );
};

export default Watch;