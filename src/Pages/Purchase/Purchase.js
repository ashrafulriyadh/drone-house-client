import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Banner from '../Shared/Banner/Banner';
import './Purchase.css';
import useProducts from '../../hooks/useProducts';

const Purchase = () => {

	const { name } = useParams();

	const {user} = useAuth();

	const [products]=useProducts();
    const product =products.find(item=>item.name===name);

	//react hook from
	const {register, handleSubmit, reset} = useForm();

	//handle on submit
	const onSubmit = data => {
		axios.post('https://drone-house-server.vercel.app/orders', data)
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
			<h4 className="text-center pt-4">Purchasing : {product?.name}</h4>
			<div className="d-flex justify-content-center">
				<img className="img-fluid hvr-grow" src={product?.img} width="200" alt="" />
			</div>
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