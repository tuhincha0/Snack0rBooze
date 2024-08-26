// src/components/AddItemForm.js
import React, { useState } from 'react';

function AddItemForm({ addItem, type }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ name, description, price });
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New {type === 'snacks' ? 'Snack' : 'Drink'}</h2>
      <label>
        Name:
        <input value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Description:
        <input value={description} onChange={(e) => setDescription(e.target.value)} required />
      </label>
      <label>
        Price:
        <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" required />
      </label>
      <button type="submit">Add {type === 'snacks' ? 'Snack' : 'Drink'}</button>
    </form>
  );
}

export default AddItemForm;
