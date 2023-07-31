import React from 'react';
 import './Tshirt.css'

const Tshirt = ({ tshirt,handleButton }) => {
    const { name,picture, price,_id } = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>{price}</h4>
            <button onClick={()=>handleButton(_id)}>Buy This</button>
        </div>
    );
};

export default Tshirt;