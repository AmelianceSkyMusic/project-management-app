/* eslint-disable no-console */
import { AxiosError } from 'axios';

export const errorHandler = (error: AxiosError) => {

	if (error.response) {
		console.error('data (PMA-ERROR):', error.response.data);
		console.error('status (PMA-ERROR):', error.response.status);
		console.error('headers (PMA-ERROR):', error.response.headers);
	}

	if (error.request) {
		console.error('request (PMA-ERROR):', error.request);
	}

	console.error('message (PMA-ERROR):', error.message);

	console.error('config (PMA-ERROR):', error.config);
};
