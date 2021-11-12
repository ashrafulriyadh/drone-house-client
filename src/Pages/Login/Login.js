import React, { useState } from 'react';
import { Link, useLocation, useHistory  } from 'react-router-dom';
import Banner from '../Shared/Banner/Banner';
import './Login.css';
import useAuth from '../../hooks/useAuth';

const Login = () => {

	const {signInUsingGoogle,loginUser,user,loading,authError,saveUser} = useAuth();

	const [loginData, setLoginData] = useState({});

	const location = useLocation();
	const history = useHistory();

	const redirect_uri = location.state?.from || '/home';

	const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
				saveUser(user.email, user.displayName, 'PUT');
                history.push(redirect_uri);
            })
    }

	const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

	const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }


	return (
		<div>
			<Banner></Banner>
			<h1 className="banner-heading text-center">Login here</h1>


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
<form onSubmit={handleLoginSubmit} className="d-flex flex-column">
	<div className="h3 text-center mt-2">Login</div>
	<div className="d-flex align-items-center input-field my-3 mb-4 te text-dark"> <span className="far fa-user p-2"></span> <input name="email"  onChange={handleOnChange} type="email" placeholder="Enter Email" required className="form-control text-dark"/>
	</div>

	<div className="d-flex align-items-center input-field mb-4 text-dark"> <span className="fas fa-lock p-2"></span> <input name="password"  onChange={handleOnChange} type="password" placeholder="Password" required className="form-control" id="pwd"/>
	<button className="btn"> <span className="fas fa-eye-slash"></span> </button>

	</div>

	<div className="d-sm-flex align-items-sm-center justify-content-sm-between ">
		<div className="d-flex align-items-center"> <label className="option"> <span>Remember Me</span> <input type="checkbox"/> <span className="checkmark"></span> </label> </div>
		<div className="mt-sm-0 mt-3"><Link to="#" className="text-dark">Forgot password?</Link></div>
	</div>
	<div className="my-3"> <button type="submit" className="btn btn-danger rounded-pill px-5 py-2"> Login </button>  </div>
	<div className="mb-3 "> <span className="text-dark">Don't have an account?</span> <Link className="text-danger" to="/register">Sign Up</Link> </div>
</form>

	<div className="position-relative border-bottom my-3 line"> <span className="connect">or connect with</span> </div>
	<div className="text-center py-3 connections"> <Link onClick={handleGoogleLogin} to="#"className="px-2"> <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt=""/> </Link> </div>
	</div>

	{
		user.email &&
		<div className="alert alert-warning" role="alert">
		<i className="fas fa-check-circle"></i> Successfully Logged In!
	   </div>
	}

	{
		authError &&
		<div className="alert alert-warning" role="alert">
 <i className="fas fa-exclamation-triangle"></i> Login failed, Please try again
</div>
	}


	</div>

			</div>
		</div>
	);
};

export default Login;