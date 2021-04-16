
import React from 'react';
import './App.css';
import  {HomePage}  from './pages/home';
import  {ProductPage}  from './pages/products';
import SwingDoorAnimation from './components/swingDoorAnimation';
function App() {
  return (
    <div className="app">
      <HomePage />
      <ProductPage />
      <SwingDoorAnimation />

    </div>
  );
}

export default App;
