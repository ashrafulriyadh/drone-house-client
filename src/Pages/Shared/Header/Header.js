import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/drone-white.png';

const Header = () => {

  const {user,logOut} = useAuth();

	return (
		<div>
			{/* navbar start */}
			<section>
				<div className="navigation-bar">
			<nav className="navbar navbar-expand-lg navbar-dark bg-transparent custom-size">
 		<div className="container ">
    <Link className="navbar-brand fw-bold text-primary" to="/home"><img className="img-fluid logo" src={logo} alt="logo" width="120" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end my-3" id="navbarNav">
      <ul className="navbar-nav fs-6">
	  <li className="nav-item mx-3">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
		<li className="nav-item mx-3">
          <Link className="nav-link active" aria-current="page" to="/explore">Explore</Link>
        </li>

        {
      user.email &&
      <li className="nav-item">
          <Link className="nav-link active  px-4" aria-current="page" to="/dashboard">Dashboard</Link>
        </li>
    }

        {
      user.displayName &&
      <li className="nav-item">
          <Link className="nav-link active  px-4" aria-current="page" to="#">Hi, {user.displayName}</Link>
        </li>
    }

		{
      !user.email &&
      <li className="nav-item">
          <Link className="nav-link active  px-4" aria-current="page" to="/login">Login <i className="fas fa-sign-in-alt"></i></Link>
        </li>
    }

    {
      user.email &&
      <li className="nav-item">
          <Link className="nav-link active px-4" onClick={logOut} aria-current="page" to="/">Log Out <i className="fas fa-sign-out-alt"></i></Link>
        </li>
    }

      </ul>
    </div>
  </div>
</nav>
			</div>
			</section>
		</div>
	);
};

export default Header;