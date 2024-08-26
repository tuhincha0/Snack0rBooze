// src/pages/SnacksPage.js
import React from 'react';
import MenuList from '../components/MenuList';

function SnacksPage({ snacks }) {
  return <MenuList items={snacks} type="snacks" />;
}

export default SnacksPage;
