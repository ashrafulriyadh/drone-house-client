import React from 'react';
import img from '../../images/contact.svg';
import './Contact.css';

const Contact = () => {


	return (
		<div>
			<div className="text-center mb-5 py-4">
				<h1 className="fw-bold">Contact Us</h1>
				<h5 className="text-muted">We'd love to hear from you</h5>
			</div>

			<div className="container">
			<div className="row row-cols-1 row-cols-md-2 d-flex justify-content-center my-5 ">
			<div className="col-6 text-center">
				<h1 className="text-info mt-4">Office Address</h1>

				<h5>Tokyo Tower</h5>
				<p><i className="fas fa-map-marker-alt"></i> 167/B, Siddhirganj Narayangonj,<br/> Dhaka, Bangladesh.</p>
				<p><i className="fas fa-envelope"> </i> Email : info@dronehouse.com
				</p>
				<p><i className="fas fa-phone-square-alt"></i> Mobile : 01731 956, 01552 468</p>
			</div>
			<div className="col">
				<img className="img-fluid" src={img} alt="" />
			</div>
			</div>
			</div>
		</div>
	)
}

export default Contact;
