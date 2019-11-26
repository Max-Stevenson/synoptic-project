require('dotenv').config();
const mongoose = require('mongoose');

const database = (process.env.NODE_ENV === 'development' ? process.env.MONGODB_URL : process.env.MONGODB_URL_TEST)

mongoose.connect(database, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
}, (error) => {
	if (error) {
		throw error;
	};
	console.log('Connected to: ' + database);
});