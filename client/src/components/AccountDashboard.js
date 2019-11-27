import React from 'react';

const AccountDashboard = (props) => (
	<div>
		<h1>Account Dashboard</h1>
		<p className="welcome_message">{props.location.state.message}</p>
	</div>
);

export default AccountDashboard;