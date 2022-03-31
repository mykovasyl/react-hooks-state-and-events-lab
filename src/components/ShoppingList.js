import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [isFilter, setFilter] = useState("All")

  const itemsToDisplay = items.filter(item => {
    if (isFilter === "All") {
      return true
    } else {
      return item.category === isFilter
    }
  })

  function handleChange(e) {
    setFilter(e.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
