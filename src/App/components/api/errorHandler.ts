/* eslint-disable no-console */
import { AxiosError } from 'axios';

// eslint-disable-next-line consistent-return
export const errorHandler = (error: AxiosError): number | unknown => {
	if (error.response) {
		console.log(error.response.data);
		console.log(error.response.status);
		console.log(error.response.headers);
		return error.response.status;
	} if (error.request) {
		console.log(error.request);
		return error.request;
	}
	console.log('Error', error.message);

	console.log(error.config);
};
