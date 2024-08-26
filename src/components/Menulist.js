// src/components/MenuList.js
import React from 'react';
import { Link } from 'react-router-dom';

function MenuList({ items, type }) {
  return (
    <div>
      <h2>{type === 'snacks' ? 'Snacks' : 'Drinks'}</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/${type}/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuList;
