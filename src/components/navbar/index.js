import React from 'react';
import { Link } from 'react-router-dom';
import {CartIcon} from '../cart';
import {Search} from './search';

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">FAAC Automation</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technical">Technical Information</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Contact Us</Link>
              </li>
            </ul>
            <Link to="/cart">
            <div>
              <CartIcon />
            </div>
            </Link>
            <Search />
          </div>
        </nav>
      )
}