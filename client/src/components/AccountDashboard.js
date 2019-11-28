import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class AccountDashboard extends React.Component {
	constructor(props) {
		super(props);
	};

	componentDidMount() {
		const config = {
			headers: { 'Authorization': sessionStorage.getItem('jwtToken') }
		};
		axios.get('http://localhost:3000/api/v1/users/me',
		config
		).then((res) => {
			console.log(res);	
		}).catch((error) => {
			if (error.status === 401) {
				this.props.history.push({
          pathname: '/',
        });
			};
		});
	};

	render() {
		return (
			<div>
				<h1>Account Dashboard</h1>
				<p className="welcome_message">Dashboard test</p>
			</div>
		);
	};
};

const mapStateToProps = (state) => {
	return {
	};
};

export default connect(mapStateToProps)(AccountDashboard);