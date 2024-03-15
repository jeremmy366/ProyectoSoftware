import React from 'react'
import { NavLink } from 'react-router-dom';
import Login from './buttons/Login';
import Signup from './buttons/Signup';
import CartBtn from './buttons/CartBtn';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid py-2">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Productos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">Acerca</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contáctanos</NavLink>
              </li>
            </ul>
            <NavLink className="navbar-brand mx-auto fw-bold" to="#">Libros Electrónicos</NavLink>
            <Login />
            <Signup />
            <CartBtn/>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
