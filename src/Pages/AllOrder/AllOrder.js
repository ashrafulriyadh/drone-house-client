import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useOrder from '../../hooks/useOrder';

const AllOrder = ({order}) => {

	const {customer_name, name, email, status} = order;

	//button disable
	const [double, setDouble] = useState(false);

	//history hook
	const history = useHistory();

	//custom hook for display data
	const [orders, setOrders] = useOrder();

	//update

	const handleActive = id => {
		const url = `https://frozen-oasis-55773.herokuapp.com/orders/${id}`;

		fetch(url, {
			method : 'PUT'
		})
		.then(res => res.json())
		.then(data => {

		})

		alert('Order Confirmed');
		history.push('/dashboard');

		setDouble(true);
	}

	//Delete an user

	const handleDelete = id => {
		const url = `https://frozen-oasis-55773.herokuapp.com/orders/${id}`;

		const confirm = window.confirm("Are you sure to delete?");

		if(confirm) {
			fetch(url, {
				method : 'DELETE'
			})
			.then(res => res.json())
			.then(data => {
				if(data.deletedCount > 0) {
					alert('Deleted Successfully');

					const remainingOrder = orders.filter(order => order._id !== id);
					setOrders(remainingOrder);

					history.push('/dashboard');
				}
			})
		}


	}

	return (
		<div>
			<div className="col-12 col-md-12 overflow-hidden">
	<div className="card pt-3 shadow-lg h-100">
  <div className="card-body">
    <div className="row manage-order">
		<div className="col">
		<p><span className="d-md-none">Customer name: </span>{customer_name}</p>
		</div>
		<div className="col-md-3">
			<p><span className="d-md-none">Email: </span>{email}</p>
		</div>
		<div className="col">
			<p><span className="d-md-none">Product Name: </span>{name}</p>
		</div>
		<div className="col">
			<p><span className="d-md-none">Order status: </span>{status}</p>
		</div>
		<div className="col-md-1 mx-2">
			{
				status==="pending"&&
				<button disabled={double} onClick={() => handleActive(order._id)} className="btn btn-warning custom-btn-position">Confirm</button>
			}
			{
				status==="Shipped"&&
				<button disabled onClick={() => handleActive(order._id)} className="btn btn-warning custom-btn-position">Confirmed</button>
			}
		</div>
		<div className="col-md-1 custom-btn-margin">
			<button onClick={() => handleDelete(order._id)} className="btn btn-danger "><i className="far fa-trash-alt"></i></button>
		</div>
	</div>

  </div>
</div>
</div>
		</div>
	);
};

export default AllOrder;