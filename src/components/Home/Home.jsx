import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const tshirtData = useLoaderData();
    // console.log(tshirtData);
    const [cart, setCart] = useState([]);

    const handleButton = (id) => {
        const exsist = cart.find(everyCartTshirt => everyCartTshirt._id === id)
        if (exsist) {
            alert('T-shirt Already added');
        }
        else {
            const sellectedTshirt = tshirtData.find(ts =>ts._id===id);
            const newCart = [...cart, sellectedTshirt];
            setCart(newCart);
            alert('successfully added');
        }

    }
   
    const handleRemoveBtn = (product) => {
        const remainigProduct = cart.filter(cartProduct => cartProduct._id !== product._id);
        setCart(remainigProduct)
    }
    return (
        <div className='home-container'>
            <div className="t-shirt-container">
                {
                    tshirtData.map(tshirt => <Tshirt
                    key={tshirt.id}
                        tshirt={tshirt}
                        handleButton={handleButton}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveBtn={handleRemoveBtn}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;

