import axios from 'axios';

import { SETTINGS } from '../settings';

export default axios.create({
	baseURL: SETTINGS.URL,
	headers: {
		'Content-type': 'application/json',
	},
});
