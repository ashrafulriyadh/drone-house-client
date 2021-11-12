import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css';

const AddProduct = () => {

	//react hook form
	const {register, handleSubmit, reset} = useForm();

	const onSubmit = data => {

        axios.post('https://frozen-oasis-55773.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
	return (
		<div>
			<div className="container-fluid">
			<div className="container-fluid">
				<h1 className="text-center mt-5 ">
					Add a new Product
				</h1>

				<div className="row justify-content-center mt-5">

				<div className="col-12 col-sm-6">
				<form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control mb-4" {...register("name")} placeholder="Name" />
                <textarea className="form-control mb-4" {...register("description")} placeholder="Description" />
                <input className="form-control mb-4" type="number" {...register("price")} placeholder="price" />
                <input className="form-control mb-4" {...register("img")}
				placeholder="image url" />

				<div className="text-center">
				<input className="btn btn-dark mt-3 px-4" type="submit" />
				</div>
            </form>
				</div>
				</div>

			</div>
			</div>
		</div>
	);
};

export default AddProduct;