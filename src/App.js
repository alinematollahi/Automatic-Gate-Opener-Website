
import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { HomePage , ProductPage , DetailPage } from './pages';
//import { ProductPage } from './pages/products';
import SwingDoorAnimation from './components/swingDoorAnimation';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from './components/navbar';
//import { DetailPage } from './pages/detail';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/products" component={ProductPage} />
            <Route path="/detail/:id" component={DetailPage} />
            <Route path="/a" component={SwingDoorAnimation} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
