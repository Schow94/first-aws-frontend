import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

const API_URL = `http://ec2-3-128-198-148.us-east-2.compute.amazonaws.com:5001`;

function App() {
	const [users, setUsers] = useState([]);

	const getData = async () => {
		const data = await axios.get(`${API_URL}/users`);

		setUsers(data.data.users);
	};

	useEffect(() => {
		getData();
	}, []);

	const renderUsers = () => {
		return users.map((u) => {
			return (
				<div key={u.user_ID}>
					<p>
						{u.firstname} {u.lastname} - {u.email}
					</p>
				</div>
			);
		});
	};

	return (
		<div className="App">
			<h1>This entire app is hosted on AWS</h1>
			<p>Frontend: AWS Amplify</p>
			<p>Backend: AWS EC2</p>
			<p>MySQL: AWS RDS</p>

			<div>
				<h2>Users Table from MySQL</h2>

				{renderUsers()}
			</div>
		</div>
	);
}

export default App;
