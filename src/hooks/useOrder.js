import { useEffect, useState } from "react";


const useOrder = () => {
	const [orders, setOrders] = useState([]);

	//fetch my order api
	const url = `https://dronehouseserver.onrender.com/orders`;

	useEffect(() => {
		fetch(url)
		.then(res => res.json())
		.then(data => setOrders(data))
	},[url]);

	return [orders, setOrders];
};

export default useOrder;