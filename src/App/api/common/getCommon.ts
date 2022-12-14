import { AxiosError } from 'axios';

import { HTTP } from '../base/HTTP';
import { errorHandler } from '../helpers/errorHandler';

export const getCommon = async<TReturnData>(endpoint = '') => {
	try {
		const { data, status } = await HTTP.get<TReturnData>(endpoint);
		return { data, status };

	} catch (error) {
		errorHandler(error as AxiosError);
		return {
			data: (error as AxiosError).response?.data,
			status: (error as AxiosError).response?.status,
		};
	}
};
