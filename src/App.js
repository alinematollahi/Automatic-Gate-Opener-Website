
import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { HomePage, ProductPage, DetailPage, CartPage } from './pages';
//import { ProductPage } from './pages/products';
import SwingDoorAnimation from './components/swingDoorAnimation';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
//import { DetailPage } from './pages/detail';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/products" component={ProductPage} />
            <Route path="/detail/:id" component={DetailPage} />
            <Route path="/a" component={SwingDoorAnimation} />
            <Route path="/cart" component={CartPage} />
          </Switch>
        </div>
      </BrowserRouter>
      <Footer />
    </div >
  );
}

export default App;
