import React from 'react'

export default function Cake({cakes, updateCart}) {
  return (
    <div className="cakes-container">
      {cakes.map(cake => {
        return <div className="cake-item" key={cake.id}> <img src={cake.image}/>
        <div className="cake-text">
        <h4>{cake.name}</h4>
        <h4>Price: ${cake.price.toFixed(2)}</h4>
        <button id="addToCart" onClick={(e) => updateCart(e, cake.id)}>Add to Cart </button>
        </div>
        </div>
      })}
    </div>
  )
}
