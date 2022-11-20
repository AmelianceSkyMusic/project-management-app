import { AxiosError } from 'axios';

import { IUser, IUserLogInResponse } from '../../types/api';
import { errorHandler } from './errorHandler';
import HTTP from './http-common';

export const createUser = async (
	obj: IUser,
// eslint-disable-next-line consistent-return
): Promise<(number | IUserLogInResponse)[] | undefined> => {
	try {
		const { data, status } = await HTTP.post<IUserLogInResponse>(
			'/auth/signup',
			obj,
		);
		return [data, status];
	} catch (error) {
		errorHandler(error as AxiosError);
	}
};
