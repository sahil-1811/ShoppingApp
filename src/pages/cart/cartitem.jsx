import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

export const CartItem = (props) => {
    const {id,productName,productImage,price} = props.data
    const {cartItems,addToCart,removeFromCart,updateCartItemCount} = useContext(ShopContext)
  return (
    <div className='cartItem'>
        <img src = {productImage} alt='product-image'/>
        <div className='description'>
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
            <div className='countHandler'>
                <button className="delete" onClick={()=>{removeFromCart(id)}}>-</button>
                <input className = "cartValue"value = {cartItems[id]} onChange = {(e)=>updateCartItemCount(Number(e.target.value),id)}/>
                <button className="add" onClick={()=>{addToCart(id)}}>+</button>
            </div>


        </div>
    </div>
  )
}
