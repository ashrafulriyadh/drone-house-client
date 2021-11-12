import React from 'react';
import {
	Switch,
	Link,
	useRouteMatch
  } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import Banner from '../Shared/Banner/Banner';
import './Dashboard.css';
import AddProduct from '../AddProduct/AddProduct';
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Payment from '../Payment/Payment';
import MyOrder from '../MyOrder/MyOrder';
import ManageOrder from '../ManageOrder/ManageOrder';
import ManageProduct from '../ManageProduct/ManageProduct';
import AddReview from '../AddReview/AddReview';
import AdminRoute from '../Admin/AdminRoute/AdminRoute';

const Dashboard = () => {

	const {user,logOut,admin} = useAuth();

    const email = user.email;

	let { path, url } = useRouteMatch();

	return (
		<div>
			<Banner></Banner>
			<div className="container">
            <h1 className="banner-heading text-center ">Dashboard</h1>
            </div>

			<div>
			<div className="container-fluid sidenav-container">
    <div className="row flex-nowrap">
        <div className="col-4 col-md-3 col-xl-2 px-sm-2 px-0 custom-bg-color">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
                    <li className="nav-item ">
                        <Link to="/" className="nav-link align-middle text-white px-0 py-2 sidenav-font">
						<i className="fas fa-home"></i> <span className="d-sm-inline">Home</span>
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link to={`${url}`}  className="nav-link px-0 align-middle text-white py-2 sidenav-font">
						<i className="fas fa-tachometer-alt"></i> <span className=" d-sm-inline">Dashboard</span> </Link>

                    </li>
					{
                        admin&&
                        <li>
                        <Link to={`${url}/addProduct`} className="nav-link px-0 align-middle text-white py-2 sidenav-font">
						<i className="fas fa-plus"></i> <span className=" d-sm-inline">Add product</span> </Link>

                        <Link to={`${url}/manageProduct`} className="nav-link px-0 align-middle text-white py-2 sidenav-font">
						<i className="far fa-edit"></i> <span className=" d-sm-inline">Manage product</span> </Link>

                        <Link to={`${url}/makeAdmin`} className="nav-link px-0 align-middle text-white py-2 sidenav-font">
						<i className="fas fa-user-shield"></i> <span className=" d-sm-inline">Make Admin</span> </Link>

                    </li>
                    }
                    {
                        admin&&
                        <li>
                        <Link to={`${url}/manageOrder`} className="nav-link text-white px-0 align-middle py-2 sidenav-font ">
						<i className="fas fa-cog"></i> <span className=" d-sm-inline">Manage Orders</span></Link>
                    </li>
                    }
                    {
                        !admin&&
                        <li>
                        <Link to={`${url}/myOrder/${email}`} className="nav-link text-white px-0 align-middle py-2 sidenav-font ">
						<i className="fas fa-shopping-bag"></i> <span className=" d-sm-inline">My Orders</span></Link>

                        <Link to={`${url}/addReview`} className="nav-link text-white px-0 align-middle py-2 sidenav-font">
						<i className="fas fa-star-half-alt"></i> <span className=" d-sm-inline">Review</span></Link>

                        <Link to={`${url}/pay`} className="nav-link px-0 align-middle text-white py-2 sidenav-font">
						<i className="fas fa-credit-card"></i> <span className=" d-sm-inline">Pay</span></Link>
                    </li>
                    }
                    <li>
                        <Link to="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle text-white py-2 sidenav-font">
						<i className="fas fa-user"></i> <span className=" d-sm-inline">Profile</span> <i className="fas fa-chevron-down"></i> </Link>
                            <ul className="collapse nav flex-column" id="submenu3" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link to="#" className="nav-link px-0 text-white py-2 sidenav-font"> <span className="d-sm-inline">Hi,{user.displayName}</span></Link>
                            </li>
                            <li>
                                <Link to="#" onClick={logOut} className="nav-link px-0 text-white py-2 sidenav-font"> <span className=" d-sm-inline">Log Out</span></Link>
                            </li>

                        </ul>
                    </li>
                </ul>
                <hr/>
            </div>
        </div>
        <div className="col-8 col-md-10 py-3">



        {/* nested Routing */}
        <Switch>
        <PrivateRoute exact path={path}>
				<DashboardHome></DashboardHome>
        </PrivateRoute>
        <AdminRoute path={`${path}/addProduct`}>
			<AddProduct></AddProduct>
        </AdminRoute>
        <AdminRoute path={`${path}/makeAdmin`}>
			<MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/manageOrder`}>
			<ManageOrder></ManageOrder>
        </AdminRoute>
        <PrivateRoute path={`${path}/pay`}>
			<Payment></Payment>
        </PrivateRoute>
        <AdminRoute path={`${path}/manageProduct`}>
			<ManageProduct></ManageProduct>
        </AdminRoute>
        <PrivateRoute path={`${path}/addReview`}>
			<AddReview></AddReview>
        </PrivateRoute>
        <PrivateRoute path={`${path}/myOrder/:email`}>
			<MyOrder></MyOrder>
        </PrivateRoute>
      </Switch>
        </div>
    </div>
</div>
    		</div>
</div>
	);
};

export default Dashboard;