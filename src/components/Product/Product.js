import React from 'react';

import './Product.css';

const Product = (props) => {
    const {product, handleAddToCart} = props;
    const {name, img, seller, price, ratings} = product;
   
  
    return (
        <div className='products'>
            <img src={img} alt="" /> 
           <div className='product-info'> 
            <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Ratings: {ratings}</p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
                <p>
                    Add to Cart
                </p>
               
            </button>
        </div>
    );
};

export default Product;