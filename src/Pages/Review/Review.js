import React from 'react';

const Review = ({review}) => {

	const {name,Customer_Name,description,img,rating} = review;


	return (
		<div>
				<div className="col">
	<div className="card h-100 text-center">
  <div>
  <img src={img} className="card-img-top  mt-3 px-2" id="review-card" alt="..."/>
  </div>
  <div className="card-body p-4 text-center">
    <h5 className="card-title text-dark fw-bold">{Customer_Name}</h5>
	<p className="card-text text-dark text-center">Product: {name}</p>
	<p className="card-text text-dark text-center">{description}</p>
	<p>Rating: {
		rating==='5'&&
		<span><i className="fas fa-star"></i>
		<i className="fas fa-star"></i>
		<i className="fas fa-star"></i>
		<i className="fas fa-star"></i>
		<i className="fas fa-star"></i></span>
		}
		{
		rating==='4'&&
		<span><i className="fas fa-star"></i>
		<i className="fas fa-star"></i>
		<i className="fas fa-star"></i>
		<i className="fas fa-star"></i>
		</span>
		}
		{
		rating==='3'&&
		<span><i className="fas fa-star"></i>
		<i className="fas fa-star"></i>
		<i className="fas fa-star"></i>
		</span>
		}
		{
		rating==='2'&&
		<span><i className="fas fa-star"></i>
		<i className="fas fa-star"></i>
		</span>
		}
		{
			rating==='1'&&
			<span><i className="fas fa-star"></i>
			</span>
			}</p>
  </div>
</div>
</div>
		</div>
	);
};

export default Review;