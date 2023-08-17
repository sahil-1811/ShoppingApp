import React,{useState,useEffect} from 'react'

export const Product = (props) => {
    const {id,productName,price,productImage} = props.data

    const [addtoCart,setAddToCart] = useState(0)

  return (
    <div className='product'>
        <img src = {productImage} alt = "productName"/>
        <div className='description'>
            <p>
            <b>{productName}</b>
            </p>
            <p>${price}</p>
        </div>
        <button className='addToCartBttn'>
            Add to Cart
        </button> 

    </div>
  )
}
