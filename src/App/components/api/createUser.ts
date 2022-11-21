import { AxiosError } from 'axios';

import { IUser, IUserSignUpResponse } from '../../types/api';
import { errorHandler } from './errorHandler';
import HTTP from './http-common';

export const createUser = async (
	body: IUser,
) => {
	try {
		const { data, status } = await HTTP.post<IUserSignUpResponse>(
			'/auth/signup',
			body,
		);
		return [data, status];

	} catch (error) {
		errorHandler(error as AxiosError);
		return null;
	}

};
