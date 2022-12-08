import axios from 'axios';

import { baseURL } from './baseUrl';

export const HTTP = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json',
	},
});
