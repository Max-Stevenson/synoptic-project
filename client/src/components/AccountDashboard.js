import React from 'react';
import { connect } from 'react-redux';
import { setAccountDetails } from '../actions/userActions';
import { 
  setLoginPending, 
  setLoginSuccess, 
  setAuthorization 
} from '../actions/loginActions';
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

	handleTopUp = (event) => {
		event.preventDefault();
		this.props.history.push({pathname: '/top-up'});
	};

	handlePurchase = (event) => {
		event.preventDefault();
		this.props.history.push({pathname: '/purchase'});
	};

	handleLogout = (event) => {
		const config = {
			headers: { 'Authorization': sessionStorage.getItem('jwtToken') }
		};
		axios.post('http://localhost:3000/api/v1/users/logout',{} , config).then((res) => {
			this.props.dispatch(setLoginPending(false));
      this.props.dispatch(setAuthorization(false));
			this.props.dispatch(setLoginSuccess(false));
			this.props.history.push({pathname: '/'});
		});
	};

	render() {
		return (
			<div>
				<h1>Account Dashboard</h1>
				<p className="welcome_message">Welcome {this.props.accountDetails.name}</p>
				<p>Your account balance: {
					new Intl.NumberFormat('en-IN',{ style: 'currency', currency: 'GBP' })
					.format(convertPenceToPound(this.props.accountDetails.accountBalance))}
				</p>
				<button onClick={this.handleTopUp}>Top Up</button>
				<button onClick={this.handlePurchase}>Make Purchase</button>
				<button onClick={this.handleLogout}>Logout</button>
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