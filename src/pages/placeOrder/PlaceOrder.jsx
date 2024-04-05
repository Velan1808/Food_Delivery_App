import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {cartTotalAmount} = useContext(StoreContext);

  return (
     <div className="place-order">
      <div className="place-order-left">
          <div className="place-order-title">
            <h2>Delivery Information</h2>
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Frist name' />
            <input type="text" placeholder='Last name' />
          </div>
          <input type="email" placeholder='Email Address' />
          <input type="text" placeholder='Street'/>
          <div className="multi-fields">
            <input type="text" placeholder='City name' />
            <input type="text" placeholder='Pin code' />
          </div>
          <input type="text" placeholder='phone'/>
      </div>
      <div className='place-order-right'>
      <div className="cart-buttom">
          <div className="cart-buttom-left">
            <div className="title">
              <h2>Total Cart</h2>
            </div>
            <div className="cart-delivery-list">
              <p>Subtotal</p>
              <p>${cartTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-delivery-list">
              <p>Delivery fee</p>
              <p>${cartTotalAmount()===0 ? 0:49}</p>
            </div>
            <hr />
            <div className="cart-delivery-list">
              <p>Total</p>
              <p>${cartTotalAmount()===0 ? 0:cartTotalAmount() + 49}</p>
            </div>
            <button>PROCEED TO PAY</button>
        </div>
      </div>
      </div>
     </div>
  )
}

export default PlaceOrder