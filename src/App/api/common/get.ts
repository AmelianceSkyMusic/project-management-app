import { AxiosError } from 'axios';

import { IUser } from '../../types/api';
import { errorHandler } from './errorHandler';
import HTTP from './http-common';

export const getCommon = async (endpoint1: string, endpoint2: string) => {
	try {
		const { data, status } = await HTTP.get<IUser[]>(endpoint1 + endpoint2);
		return [data, status];

	} catch (error) {
		errorHandler(error as AxiosError);
		return null;
	}
};
