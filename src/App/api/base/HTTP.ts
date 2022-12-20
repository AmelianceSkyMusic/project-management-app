import axios from 'axios';

import { baseURL } from './baseUrl';

const token = localStorage.getItem('token');
export const HTTP = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${token}`,
	},
});
