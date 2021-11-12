import React from 'react';
import Header from '../Shared/Header/Header';
import './Home.css';
import useProducts from '../../hooks/useProducts';
import Products from '../Products/Products';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import HomeSection from '../HomeSection/HomeSection';
import Contact from '../Contact/Contact';
import useAuth from '../../hooks/useAuth';



const Home = () => {

	const [products] = useProducts();
	const [reviews] = useReviews();

	const slicedProduct = products.slice(0,6);

	const {loading} = useAuth();


	return (
		<div>
			<div className="home-banner"></div>
			<Header></Header>
			<div className="container">
				<h1 className="text-center home-banner-heading animate__animated animate__fadeInDown animate__delay-2s">Fly Like A Bird</h1>
			</div>
			<div className="container banner-bottom-heading text-center">
			<h1 className=" text-uppercase ">It's still magic even if you know <br /> how its done</h1>
			<button className="btn btn-outline-light px-4 py-2">Explore</button>
			</div>

			{/* introducing */}
			<section>
				<HomeSection></HomeSection>
			</section>

			{/* display product section */}
			<section>
			<div className="container product-container">
			{
					loading&&
					<div className="d-flex justify-content-center spinner">
				<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
				</div>
				}
				<h5 className="text-center text-muted">Featured Products</h5>
				<h1 className="text-center fw-bold">Our Drones</h1>
			</div>

			<div className="container mt-5">
		<div className="row row-cols-1 row-cols-md-3 g-4">

		{
			slicedProduct.map(product=> <Products
			product={product} key={product._id}></Products>)
		}

		</div>
			</div>
			</section>

			{/* extra section  */}
			<section>
				<div className="container-fluid my-5 pt-5">
					<div className="row bg-dark">
						<div className="col-12 col-md-7">
							<img className="img-fluid" src="https://i.ibb.co/j6TZLYR/photo-1473968512647-3e447244af8f-ixid-Mnwx-Mj-A3f-DB8-MHxz-ZWFy-Y2h8-MXx8-ZHJvbm-V8-ZW58-MHx8-MHx8-i.jpg" alt="" />
						</div>
						<div className="col-12 col-md-5 text-center d-flex align-items-center text-white">
							<div>
							<h1>Take It Anywhere, Film In Any Condition</h1>
							<p>A 5.5in 1080p screen integrated with the Phantom 4 Pro + offers 1000 cd/m2 of brightness, more than twice as bright as conventional smart devices. It makes bright, vivid colors easily visible in direct sunlight. As the DJI GO 4 app is built into the screen, a mobile device is not required, simplifying pre-flight preparations.</p>
						<button className="btn btn-outline-light py-2 mb-3">Contact Us</button>
							</div>
						</div>
					</div>
				</div>
			</section>


				{/* Review Section  */}
			<section>
				<div className="container my-5 py-5">

				<h1 className="text-center fw-bold my-5">Our Customers Say</h1>
				<div className="row row-cols-1 row-cols-md-3">
					{
						reviews.map(review=> <Review review={review} key={review._id}></Review>)
					}
				</div>

				</div>
			</section>

			{/* FAQ section */}
			<section>
				<div className="container pt-5">
					<h1 className="text-center fw-bold">
						Frequently Asked Question
					</h1>
				</div>

				<div className="container my-5">
				<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Do you deliver product at home?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Yes, Of course.</strong> We give home delivery with only have booking money of product all over in the world.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Do you give warranty?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Sure it is,</strong> We will provide company warranty if the product has warranty by the company.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Do you take payment by installment ?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>We afraid, we do not have installment policy.</strong> We dont have installment policy but we can manage tour loan from bank if you are interested.
      </div>
    </div>

  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
        Do you have any discount ?
      </button>
    </h2>
    <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Yes we have.</strong> We have always discount available on our website. Now we have 35% flat sale going on any product purchase.
      </div>
    </div>

  </div>
</div>
				</div>
			</section>

			{/* contact section */}

			<Contact></Contact>
		</div>
	);
};

export default Home;