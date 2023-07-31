import React, { useContext } from 'react';
import { MoneyContext } from '../GrandPa/GrandPa';

const Sister = ({ house }) => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h4>Sisters</h4>
            <p>House:{money}</p>
            <button onClick={()=>setMoney(money+1000)}>Add 1000 Tk</button>
        </div>
    );
};

export default Sister;