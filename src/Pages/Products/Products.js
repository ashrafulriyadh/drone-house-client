import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = ({product}) => {

	const {name, img, description,price} = product;
	return (
		<div>
			<div className="col mb-4">
	<div className="card product-card hvr-float-shadow h-100 text-center">
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body p-4">
    <h4 className="card-title text-dark fw-bold">{name}</h4>
	<p className="card-text text-dark">{description}</p>
	<p>Rating: <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
	<h5 className="card-text text-center">Price: <span className="text-danger">${price}</span></h5>
	<Link to={`/purchase/${name}`}><button className="btn btn-dark my-3">Buy Now  <i className="fas fa-shopping-bag"></i></button></Link>
  </div>
</div>
</div>
		</div>
	);
};

export default Products;