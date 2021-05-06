
import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { HomePage, ProductPage, DetailPage, CartPage, TechnicalPage } from './pages';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/products" component={ProductPage} />
            <Route path="/detail/:id" component={DetailPage} />
            <Route path="/technical" component={TechnicalPage} />
            <Route path="/cart" component={CartPage} />
          </Switch>
        </div>
      </BrowserRouter>
      <Footer />
    </div >
  );
}

export default App;
