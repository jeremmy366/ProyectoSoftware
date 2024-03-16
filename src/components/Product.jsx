import React, { useState } from 'react';
import DATA from '../DATA';
import { NavLink } from 'react-router-dom';

const Product = () => {
  const [filter, setFilter] = useState(null);

  const cardItem = (item) => {
    if (!filter || item.category === filter) {
      return (
        <div className="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
          <img src={item.img} className="card-img-top" alt={item.title} />
          <div className="card-body text-center">
            <h5 className="card-title">{item.title}</h5>
            <p className="lead">${item.price}</p>
            <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">Compra ahora</NavLink>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  const filterProduct = (category) => {
    setFilter(category);
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Libros</h1>
            <hr />
          </div>
        </div>
        <div className="buttons d-flex justify-content-center">
          <button className="btn btn-outline-dark me-2" onClick={() => setFilter(null)}>Todo</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Ficción")}>Libros de ficción</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Horror")}>Libros de horror</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Romance")}>Libros de romance</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Clásicos")}>Libros de clásicos</button>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {DATA.map(cardItem)}
        </div>
      </div>
    </div>
  );
}

export default Product;
