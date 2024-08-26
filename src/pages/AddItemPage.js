// src/pages/AddItemPage.js
import React from 'react';
import AddItemForm from '../components/AddItemForm';

function AddItemPage({ addItem }) {
  return (
    <div>
      <AddItemForm addItem={addItem} type="snacks" />
      <AddItemForm addItem={addItem} type="drinks" />
    </div>
  );
}

export default AddItemPage;
