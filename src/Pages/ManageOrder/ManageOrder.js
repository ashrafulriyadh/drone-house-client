import React from 'react';
import AllOrder from '../AllOrder/AllOrder';
import useOrder from '../../hooks/useOrder';
import './ManageOrder.css';

const ManageOrder = () => {

	const [orders] = useOrder();


	return (
		<div>
			<div className="container  ">
				<div className="col-12 col-md-12">
				<h1 className="text-center my-5">Manage All Order</h1>
				</div>

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
			<p>Name</p>
		</div>
		<div className="col">
			<p>Order Status</p>
		</div>
		<div className="col-md-1">
			<p>Confirm</p>
		</div>
		<div className="col-md-1">
			<p>Delete</p>
		</div>
	</div>

  </div>
</div>
</div>
			</div>
			<div className="row row-cols-1">
				{
					orders.map(order=> <AllOrder key={order._id} order={order}></AllOrder>)
				}
			</div>
			</div>
		</div>
	);
};

export default ManageOrder;