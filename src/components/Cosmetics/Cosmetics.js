import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const cosmetics = [
        { id: 1, name: 'Alta', price: 800 },
        { id: 2, name: 'Chuno', price: 700 },
        { id: 3, name: 'Powder', price: 600 },
        { id: 4, name: 'Saban', price: 500 },
        { id: 5, name: 'Oil', price: 400 },
        { id: 6, name: 'Fres-hwash', price: 300 }
    ];
    return (
        <div style={{ border: '5px solid red', backgroundColor: 'green', margin: '10px' }}>
            <h4>Cosmetics List below</h4>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)

            }
        </div >
    );
};

export default Cosmetics;