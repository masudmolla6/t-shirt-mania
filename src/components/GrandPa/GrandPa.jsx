import React, { createContext, useState } from 'react';
import './GrandPa.css'
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';


export const RingContext = createContext('matir ring');
export const MoneyContext = createContext(666);

const GrandPa = () => {
    const [house, setHouse] = useState(1);
    // const ring = 'diamond ring';
    const [money, setMoney] = useState(666);
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <MoneyContext.Provider value={[money,setMoney]}>
                <div className='grandpa'>
                    <h1>This Is My GrandPa</h1>
                    <section className='flex'>
                        <Father house={house}></Father>
                        <Uncle house={house}></Uncle>
                        <Aunty house={house}></Aunty>
                    </section>
                </div>
            </MoneyContext.Provider>
        </RingContext.Provider>
    );
};

export default GrandPa;


// Context Api
// 1-Declear a Context
// 2- set provider with value
// 3-useContext in the place where you want to get the context