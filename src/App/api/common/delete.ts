import { AxiosError } from 'axios';

import { IUser } from '../../types/api';
import { errorHandler } from './errorHandler';
import HTTP from './http-common';

// eslint-disable-next-line @typescript-eslint/naming-convention
type ReturnData = | IUser

export const deleteCommon = async (endpoint1 = '', endpoint2 = '') => {
	try {
		const { data, status } = await HTTP.delete<ReturnData>(endpoint1 + endpoint2);
		return [data, status];

	} catch (error) {
		errorHandler(error as AxiosError);
		return null;
	}
};
