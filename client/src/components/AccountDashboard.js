import React from 'react';
import { connect } from 'react-redux';
import { setAccountDetails } from '../actions/userActions';
import { convertPenceToPound } from '../utils/currencyFormatter';
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
			this.props.dispatch(setAccountDetails(res.data));
		}).catch((error) => {			
			if (error.response.status === 401) {
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
				<p className="welcome_message">Welcome {this.props.accountDetails.name}</p>
				<p>Your account balance: {
					new Intl.NumberFormat('en-IN',{ style: 'currency', currency: 'GBP' })
					.format(convertPenceToPound(parseInt(this.props.accountDetails.accountBalance)))}</p>
			</div>
		);
	};
};

const mapStateToProps = (state) => {
	return {
		accountDetails: state.userDetails
	};
};

export default connect(mapStateToProps)(AccountDashboard);