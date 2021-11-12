import React from 'react';
import 'animate.css';

const HomeSection = () => {
	return (
		<div>
			<div className="container product-container">
			<h1 className="text-center fw-bold text-uppercase animate__animated animate__pulse animate__delay-2s">Introducing</h1>
			<p className="text-center text-muted text-uppercase">A new era of Drones</p>


			<div className="row">
				<img src="https://i.ibb.co/L0HNtnD/SpxP.gif" alt="" />
			</div>

			<div className="row">


			<p className="text-center text-muted">Experience</p>
      <h1 className="text-center fw-bold text-info text-uppercase">Fly in the sky</h1>

			<div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card h-100 border border-0">
     <div className="text-center">
	 <img src="https://i.ibb.co/SN8ydTb/265-2652381-family-entertainment-centre-360-play-logo.png" width="100" className="mt-5" alt="..."/>
	 </div>
      <div className="card-body text-center">
        <p className="card-title fw-bold">Immersive Field of View</p>
        <p className="card-text text-muted">Screen equivalent to 125” screen viewed from 10 feet with 24-bit true color (16 million colors)</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 border border-0">
	<div className="text-center">
	 <img src="https://i.ibb.co/SdpdsWJ/689367.png" width="100" className="mt-5" alt="..."/>
	 </div>
      <div className="card-body text-center">
        <p className="card-title fw-bold">USB & HDMI</p>
        <p className="card-text text-muted">Includes optional full immersion face mask. Supports HDMI industry standard 3D content</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 border border-0">
	<div className="text-center">
	 <img src="https://cdn-icons-png.flaticon.com/512/1503/1503684.png" width="100" className="mt-5" alt="..."/>
	 </div>
      <div className="card-body text-center">
        <p className="card-title fw-bold">Battery</p>
        <p className="card-text text-muted">Built-in batteries allow the pilot to participate in the sport for hours of racing.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 border border-0">
	<div className="text-center">
	 <img src="https://i.ibb.co/0VMpCb6/autonomous.png" width="100" className="mt-5" alt="..."/>
	 </div>
      <div className="card-body text-center">
        <p className="card-title fw-bold">Return to Home</p>
        <p className="card-text text-muted">Return home tells the drone to automatically come back to you using GPS. </p>
      </div>
    </div>
  </div>
</div>
			</div>
			</div>
		</div>
	);
};

export default HomeSection;