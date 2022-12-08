import { AxiosError } from 'axios';

import { HTTP } from '../base/HTTP';
import { errorHandler } from '../helpers/errorHandler';

export const putCommon = async<TReturnData, TBody>(body: TBody, endpoint = '') => {
	try {
		const { data, status } = await HTTP.put<TReturnData>(
			endpoint,
			body,
		);
		return [data, status];

	} catch (error) {
		errorHandler(error as AxiosError);
		return {
			data: (error as AxiosError).response?.data,
			status: (error as AxiosError).response?.status,
		};
	}
};
