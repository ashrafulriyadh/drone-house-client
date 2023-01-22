import React, { useState } from 'react';

const MakeAdmin = () => {

	const [email, setEmail] = useState('');
	const [sucess, setSuccess] = useState('');

	const handleOnBlur = e => {
        setEmail(e.target.value);
    }

	//handle submit
	const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://dronehouseserver.onrender.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
					setEmail('');
                }
            })

        e.preventDefault()
    }

	return (
		<div>
			<div className="container">

			<form onSubmit={handleAdminSubmit} >
			<div className="text-center wrapper">

			<h1 className="text-center">
				Make An Admin
			</h1>
			<div className="d-flex align-items-center input-field justify-content-center my-3 te text-dark">
			<input onBlur={handleOnBlur} name="email"  type="email" placeholder="Enter Email" required className="form-control text-dark w-75"/>
			</div>
			<button className="btn btn-dark my-3 text-center">Make Admin</button>
			{
				sucess&&
				<div className="alert alert-success" role="alert">
<i className="fas fa-check-circle"></i> Successfully, Admin Added!
</div>
			}
			</div>
			</form>
			</div>
		</div>
	);
};

export default MakeAdmin;