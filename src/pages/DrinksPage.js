// src/pages/DrinksPage.js
import React from 'react';
import MenuList from '../components/MenuList';

function DrinksPage({ drinks }) {
  return <MenuList items={drinks} type="drinks" />;
}

export default DrinksPage;
