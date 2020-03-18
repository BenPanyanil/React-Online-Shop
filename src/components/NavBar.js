import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../Beseatslogo.png";
import styled from "styled-components";

export default class NavBar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm px-sm-5 pb-4">
        <div className="container align-items-end">
          <Link to="/">
            <img
              src={logo}
              alt="store"
              className="navbar-brand"
              width="140"
            ></img>
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item ml-sm-5">
              <Link to="/" className="nav-link">
                tuotteet
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <span className="mr-2">
              <i className="fas fa-shopping-bag"></i>
            </span>
          </Link>
        </div>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainWhite);
  .nav-link {
    color: var(--mainDark) !important;
    text-transform: capitalize;
  }

  a {
    color: var(--mainDark) !important;
    padding: 0 !important;

    i {
      font-size: 24px;
    }
  }
`;
