import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Banner from '../Shared/Banner/Banner';
import './Purchase.css';

const Purchase = () => {

	const { name } = useParams();

	const {user} = useAuth();

	//react hook from
	const {register, handleSubmit, reset} = useForm();

	//handle on submit
	const onSubmit = data => {
		axios.post('https://frozen-oasis-55773.herokuapp.com/orders', data)
		.then(res => {
			if (res.data.insertedId) {
				alert('added successfully');
				reset();
			}
		})
	}
	return (
		<div>
			<Banner></Banner>
			<p className="banner-heading text-center">Purchase</p>

			<div className="container order-form mb-5">
			<div className="row justify-content-center ">

				<div className="col-8 col-md-5 ">
				<form onSubmit={handleSubmit(onSubmit)} className="p-4">
				<label htmlFor="exampleFormControlInput1" className="form-label">Product Name : </label>

				<input type="text" className="form-control mb-4" {...register("name")} value={name}/>

				<label htmlFor="exampleFormControlInput1" className="form-label">Email address : </label>
                <input type="email" className="form-control mb-4" {...register("email") }  value={user.email} />
				<label htmlFor="exampleFormControlInput1" className="form-label">Customer Name : </label>
                <input className="form-control mb-4" type="text" {...register("customer_name")} value={user.displayName} />
				<label htmlFor="exampleFormControlInput1" className="form-label">Address : </label>
                <input type="text" className="form-control mb-4" {...register("address")}
				placeholder="Enter Address" />
				<label htmlFor="exampleFormControlInput1" className="form-label">Phone : </label>
				<input type="text" className="form-control mb-4" {...register("phone")}
				placeholder="Enter Phone Number" />
				<input type="text" className="form-control mb-4 d-none" {...register("status")}
				value="pending" />

				<div className="text-center">
				<input className="btn btn-dark mt-3 px-4" type="submit" />
				</div>
            </form>
				</div>
				</div>
			</div>
		</div>
	);
};

export default Purchase;