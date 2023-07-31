import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveBtn }) => {
    let message;
    if (cart.length === 0) {
        message=<p>Plase buy AtLest One item!!</p>
    }
    else if (cart.length === 1) {
        message = <div>
            <h2>Amar Jonno Ekta nao</h2>
            <h3>Tomar nijer jonno ekta</h3>
            <h3>amar jonno Ar Ekta nao</h3>
        </div>
    }
    else {
        message=<p>thanks for buy</p>
    }
    return (
        <div>
            <h2 className={cart.length === 2 ? `red` : 'blue'}>Orders summary</h2>
            <h3 className={`bold ${cart.length===3? `yellow`: `red`}`}>Order quantity:{ cart.length}</h3>
            {
                cart.map(product => <p
                key={product._id}>
                    {product.name}
                    <button onClick={()=>handleRemoveBtn(product)}>X</button>
                </p>)
            }
            {
                message
            }
            {
                cart.length===3? <p>din jon k gift korba?</p>: <p>If you want you can buy</p>
            }
            <p>And operator</p>
            {
                cart.length===4 && <h2>Double item!!</h2>
            }
            <p>Or operator</p>
            {
                cart.length===4 || <h2>Charta item add koro.</h2>
            }
        </div>
    );
};

export default Cart;


// conditional rendering
// 1-use element in a variable and then use if-else to set value.
// 2-ternary operator-(condition?true:false)
// 3-&& operator (if condition is true , i want to dibsplay something);
// 4-|| operator (if condion is false, i want to display something);