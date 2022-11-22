import { AxiosError } from 'axios';

import { IBadRequest, IUser } from '../../types/api';
import { errorHandler } from './errorHandler';
import HTTP from './http-common';

// eslint-disable-next-line @typescript-eslint/naming-convention
type ReturnData = | IUser | IBadRequest

export const putCommon = async (body: IUser, endpoint1 = '', endpoint2 = '') => {
	try {
		const { data, status } = await HTTP.post<ReturnData>(
			endpoint1 + endpoint2,
			body,
		);
		return [data, status];

	} catch (error) {
		errorHandler(error as AxiosError);
		return null;
	}
};
