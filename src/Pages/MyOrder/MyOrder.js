import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MyOrder = () => {

	const [myOrders, setMyOrders] = useState([]);

	const {email} = useParams();

	//fetch my order api
	const url = `http://localhost:5000/orders/${email}`;

	useEffect(() => {
		fetch(url)
		.then(res => res.json())
		.then(data => setMyOrders(data))
	},[url]);



	//handle delete button

	const handleDelete = id => {
		const url = `http://localhost:5000/orders/${id}`;

		const confirm = window.confirm("Are you sure to delete?");

		if(confirm) {
			fetch(url, {
				method : 'DELETE'
			})
			.then(res => res.json())
			.then(data => {
				if(data.deletedCount > 0) {
					alert('Deleted Successfully');

					const remainingOrder = myOrders.filter(order => order._id !== id);
					setMyOrders(remainingOrder);

				}
			})
		}


	}
	return (
		<div>
			<div className="container  ">
				<h1 className="text-center my-5 fw-bold">My Orders</h1>

			<div className="row d-none d-md-block">
			<div className="col ">
	<div className="card pt-3 shadow-lg h-100 bg-dark text-white  ">
  <div className="card-body ">
    <div className="row manage-order">
		<div className="col">
			<p>Customer Name</p>
		</div>
		<div className="col-3">
			<p>Email</p>
		</div>
		<div className="col">
			<p>Product Name</p>
		</div>
		<div className="col">
			<p>Order Status</p>
		</div>

		<div className="col-md-1">
			<p>Delete</p>
		</div>
	</div>

  </div>
</div>
</div>
			</div>

			<div className="row">
			{
				myOrders.map(myorder=> <div key={myorder._id}>
					<div className="col">
				<div className="card pt-3 shadow-lg h-100">
			  <div className="card-body">
				<div className="row manage-order">
					<div className="col">
					<p><span className="d-md-none">Customer name: </span>{myorder.customer_name}</p>
					</div>
					<div className="col-md-3">
						<p><span className="d-md-none">Email: </span>{email}</p>
					</div>
					<div className="col">
						<p><span className="d-md-none">Product Name: </span>{myorder.name}</p>
					</div>
					<div className="col">
						<p><span className="d-md-none">Order status: </span>{myorder.status}</p>
					</div>

					<div className="col-md-1 custom-btn-margin">
						<button onClick={() => handleDelete(myorder._id)}  className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
					</div>
				</div>

			  </div>
			</div>
			</div>
				</div>)
			}
			</div>
			</div>
		</div>
	);
};

export default MyOrder;