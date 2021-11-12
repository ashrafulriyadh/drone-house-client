import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Banner from '../Shared/Banner/Banner';

const Register = () => {

	const [loginData, setLoginData] = useState({});

	const history = useHistory();

	const {registerUser,loading,authError,user} = useAuth();

	//handle input fields
	const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

	//handle submit
	const handleLoginSubmit = e => {

        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

	return (
		<div>
			<Banner></Banner>
			<h1 className="banner-heading text-center">Sign Up here</h1>


			<div className="container">

			<div className="wrapper">


	{
					loading&&
					<div className="d-flex justify-content-center spinner">
				<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
				</div>
				}

	<div className="card">
<form onSubmit={handleLoginSubmit}  className="d-flex flex-column">
	<div className="h3 text-center mt-2">Create Account</div>

	<div className="d-flex align-items-center input-field my-3 mb-2 te text-dark"> <span className="far fa-user p-2"></span>

	<input name="name" onBlur={handleOnBlur} type="text" placeholder="User Name" required className="form-control text-dark"/> </div>

	<div className="d-flex align-items-center input-field my-3 mb-4 te text-dark"> <span className="fas fa-envelope p-2"></span>

	<input name="email" onBlur={handleOnBlur} type="text" placeholder="Your Email" required className="form-control text-dark"/>
	</div>

	<div className="d-flex align-items-center input-field mb-4 text-dark"> <span className="fas fa-lock p-2"></span>

	<input name="password" onBlur={handleOnBlur} type="password" placeholder="Your Password" required className="form-control" id="pwd"/>

	<button className="btn"> <span className="fas fa-eye-slash"></span> </button> </div>

	<div className="my-3"> <button type="submit" className="btn btn-danger rounded-pill px-5 py-2"> Sign Up </button>  </div>

	<div className="mb-3 "> <span className="text-dark">Already have an account?</span> <Link className="text-danger" to="/login">Log in here</Link> </div>
</form>

	{
		user.email &&
		<div className="alert alert-warning" role="alert">
		<i className="fas fa-check-circle"></i> Successfully Registered!
	   </div>
	}

	{
		authError &&
		<div className="alert alert-warning" role="alert">
 <i className="fas fa-exclamation-triangle"></i> Registration failed, Please try again
</div>
	}
	</div>
	</div>

			</div>
		</div>
	);
};

export default Register;