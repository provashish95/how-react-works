import React, { useEffect, useState } from 'react';
import Information from '../Information/Information';

const Informations = () => {
    const [informations, setInformations] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setInformations(data))
    }, [])

    return (
        <div>
            <h1>Information </h1>
            {
                informations.map(information => <Information key={information.id} information={information}></Information>)
            }

        </div>
    );
};

export default Informations;