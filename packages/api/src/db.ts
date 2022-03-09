import mongoose from 'mongoose';
import { DB_URL } from './config';

const conectDB = async () =>
	mongoose.connect(DB_URL).then(() => {
		console.log(`📦 Connected to ${DB_URL}`);
		return {
			close: () => mongoose.disconnect(),
		};
	});

export default conectDB;