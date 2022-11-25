import axios from 'axios';

import { SETTINGS } from '../../settings';

export default axios.create({
	baseURL: SETTINGS.URL,
	headers: {
		'Content-Type': 'application/json',
	},
	/* validateStatus(status) {
		return status >= 200 && status < 500;
	}, */
});
