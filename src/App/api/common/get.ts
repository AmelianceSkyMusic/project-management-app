import { AxiosError } from 'axios';

import { IUser } from '../../types/api';
import { errorHandler } from './errorHandler';
import HTTP from './http-common';

export const getCommon = async (endpoint1 = '', endpoint2 = '') => {
	try {
		const { data, status } = await HTTP.get<IUser[] | IUser>(endpoint1 + endpoint2);
		return [data, status];

	} catch (error) {
		errorHandler(error as AxiosError);
		return null;
	}
};
