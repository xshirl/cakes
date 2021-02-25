import React from 'react'

export default function Cart({selectedCakes}) {
  let totalPrice = 0.00;
  console.log(selectedCakes);
  selectedCakes.map(cake => {
    totalPrice += cake.price;
  })

  return (
    <div className="cart-container">
      <h1>Your Order</h1>
      {selectedCakes.map(cake => {
        return <h4>{cake.name} : ${cake.price.toFixed(2)} </h4>
      })}
      <div className="totalPrice">Total Price: ${totalPrice.toFixed(2)}</div>
    </div>
  )
}
