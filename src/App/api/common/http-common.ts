import axios from 'axios';

import { SETTINGS } from '../../settings';

const token = localStorage.getItem('token');
export default axios.create({
	baseURL: SETTINGS.URL,
	headers: {
		'Content-Type': 'application/json',
		// Authorization: 'Bearer ',
		Authorization: `Bearer ${token}`,
	},
});
