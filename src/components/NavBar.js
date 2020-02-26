import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/storeIcon.png';


export default class NavBar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-sm bg-primary navbar-dark px-sm-5'>
        <Link to='/'>
          <img src={logo} alt="store" className="navbar-brand" width="60"></img>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to='/' className="nav-link">Products</Link>
          </li>
        </ul>
      </nav>
    )
  }
}
