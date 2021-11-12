import React from 'react';
import Banner from '../Shared/Banner/Banner';

const NotFound = () => {
	return (
		<div>
			<Banner></Banner>
			<div className="container product-container">
			<div className="row">
			<img className="img-fluid" src="https://i.ibb.co/3rhF1GD/404-error-dribbble-800x600.gif" alt="" />
			</div>

			<h1 className="text-center mb-5 pb-5 text-danger">Error! The Page you are looking for is not exist</h1>
			</div>
		</div>
	);
};

export default NotFound;