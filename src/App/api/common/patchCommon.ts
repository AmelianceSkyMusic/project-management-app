import { AxiosError } from 'axios';

import { HTTP } from '../base/HTTP';
import { errorHandler } from '../helpers/errorHandler';

export const patchCommon = async<TReturnData, TBody>(body: TBody, endpoint: string) => {
	try {
		const { data, status } = await HTTP.patch<TReturnData>(
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
