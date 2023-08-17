import React,{useContext} from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import {CartItem} from './cartitem'
import './cart.css'
import {useNavigate} from 'react-router-dom'

export const Cart = (props) => {
    const {cartItems,getTotalCartAmount} = useContext(ShopContext)
    const navigate = useNavigate()
    const totalAmount = getTotalCartAmount()
  return (
    <div className='cart'>
        <div className='cart-title'>
            <h1>Your Cart Items</h1>
        </div>
        <div className='cartItems'>
            {PRODUCTS.map((product) => {
                if (cartItems[product.id] !== 0){
                    return <CartItem data={product} />
                }
            })}
        </div>
        {totalAmount>0 ?
        <div className='checkout'>
            
            <p> SubTotal : ${getTotalCartAmount()}</p>
            <button onClick={()=>navigate("/")}>Continue Shopping</button>
            <button>Checkout</button>
        </div>
        :
        <h1>Your cart is empty</h1>}  

    </div>
  )
}
