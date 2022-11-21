import { AxiosError } from 'axios';

import { IUser, IUserSignUpResponse } from '../../types/api';
import { errorHandler } from './errorHandler';
import HTTP from './http-common';

export const createUser = async (
	body: IUser,
// eslint-disable-next-line consistent-return
): Promise<(number | IUserSignUpResponse)[] | undefined> => {
	try {
		console.log('obj', body);
		const { data, status } = await HTTP.post<IUserSignUpResponse>(
			'/auth/signup',
			body,
		);
		return [data, status];
	} catch (error) {
		errorHandler(error as AxiosError);
	}
};
