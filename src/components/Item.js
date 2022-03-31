import React, { useState } from "react";

function Item({ name, category }) {
  
  const [ inCart, setCart ] = useState("")

  function handleClick(e) {
    if(inCart === "in-cart") {
      setCart("")
      e.target.className = "add"
      e.target.textContent = "Add to Cart"
    } else {
      setCart("in-cart")
      e.target.className = "remove"
      e.target.textContent = "Remove From Cart"
    }
  }

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={(e) => handleClick(e)}>Add to Cart</button>
    </li>
  );
}

export default Item;
