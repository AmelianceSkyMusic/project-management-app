import { AxiosError } from 'axios';

import { IUser, IUserLogInResponse } from '../../types/api';
import { errorHandler } from './errorHandler';
import HTTP from './http-common';

export const loginUser = async (
	obj: IUser,
) => {
	try {
		const { data, status } = await HTTP.post<IUserLogInResponse>(
			'/auth/signin',
			obj,
		);
		return [data, status];
	} catch (error) {
		errorHandler(error as AxiosError);
		return null;
	}
};
