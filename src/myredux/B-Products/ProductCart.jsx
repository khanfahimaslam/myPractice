import React from 'react';
import { useSelector } from 'react-redux';

const ProductCart = () => {
    const cartItems=useSelector((state)=>state.groupReducer.cart)
    console.log("cart=====-->",cartItems);
    return (
        <div>
            <h2>Product Card</h2>
            <div className='card-parent'>
                {cartItems.map((item)=>{
                    return(
                        <div className='card'>
                            <img className="image" src={item.image} alt="" />
                            <h3>{item.title.substr(0,20) + "..."}</h3>
                            <h4>Price:${item.price}</h4>
                            
                        </div>
                    )
                })

                }
            </div>
        </div>
    );
};

export default ProductCart;