/* eslint-disable no-console */
import { AxiosError } from 'axios';

export const errorHandler = (error: AxiosError): number | null => {
	if (error.response) {
		console.log(error.response.data);
		console.log(error.response.status);
		console.log(error.response.headers);
		return error.response.status;
	} if (error.request) {
		console.log(error.request);
	}
	console.log('Error', error.message);

	console.log(error.config);

	return null;
};
