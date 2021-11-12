import React from 'react';
import useAuth from '../../hooks/useAuth';
import useProducts from '../../hooks/useProducts';
import Products from '../Products/Products';
import Banner from '../Shared/Banner/Banner';

const Explore = () => {

	const [products] = useProducts();
	const {loading} = useAuth();

	return (
		<div>
			<Banner></Banner>
			<h1 className="banner-heading text-center">EXPLORE MORE</h1>

			<div className="container mt-5 pt-5">

			{
					loading&&
					<div className="d-flex justify-content-center spinner">
				<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
				</div>
				}
				<div className="row row-cols-1 row-cols-md-3 g-4">
				{
					products.map(product=> <Products product={product} key={product._id}></Products>)
				}
				</div>
			</div>
		</div>
	);
};

export default Explore;