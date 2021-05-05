import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductList } from "../components/product";
import { productService } from "../components/product";



export class HomePage extends Component {

  state = { products: [] };

  render() {
    return (
      <div>
        <img style={{ width: '100vw' }} src="/pictures/bg.jpg" />
        <div style={homePageStyle1}>
          Automatic Gate Opener Website
            </div>
        <div style={homePageStyle2}>
          <Link to="/products">See Products</Link>
        </div>

      </div>
    );
  }

};

const homePageStyle1 = {
  position: 'absolute',
  top: 80,
  left: 30,
  fontSize: 35,
  fontWeight: 700
}

const homePageStyle2 = {
  position: 'absolute',
  top: 130,
  left: 30,
  fontSize: 25,
  fontWeight: 500
}