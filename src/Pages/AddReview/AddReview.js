import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const AddReview = () => {


	const {user} = useAuth();
	const {register, formState: { errors }, handleSubmit, reset} = useForm();

	const onSubmit = data => {

        axios.post('http://localhost:5000/reviews', data)
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
			<div className="container-fluid ">
				<h1 className="text-center mt-5 ">
					Give Product Rating
				</h1>

				<div className="row justify-content-center mt-5">

				<div className="col-12 col-sm-6">
				<form onSubmit={handleSubmit(onSubmit)}>
				<input className="form-control mb-4" {...register("Customer_Name")} value={user.displayName} />
                <input className="form-control mb-4" {...register("name")} placeholder="Product Name" />
                <textarea className="form-control mb-4" {...register("description", { required: true, maxLength: 100 })} placeholder="How was the product?" />
                <input className="form-control mb-4" type="number" {...register("rating", { min: 1, max: 5 })} placeholder="Rating (1-5)" />
                <input className="form-control mb-4 d-none" {...register("img")}
				value="https://i.ibb.co/qM0zJ6R/user.png" />
				{errors.rating &&
				<div className="container">
				<p className="text-center my-4 text-danger "><i className="fas fa-exclamation-triangle"></i> Error! Please give Rating between 1 and 5 Only</p>
				</div>}

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

export default AddReview;