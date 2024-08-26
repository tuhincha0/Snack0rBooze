// src/components/MenuItem.js
import React from 'react';

function MenuItem({ item }) {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
    </div>
  );
}

export default MenuItem;
