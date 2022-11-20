import { AxiosError } from 'axios';

import { IUser, IUserSignInResponse } from '../../types/api';
import { errorHandler } from './errorHandler';
import HTTP from './http-common';

export const createUser = async (
	obj: IUser,
// eslint-disable-next-line consistent-return
): Promise<(number | IUserSignInResponse)[] | undefined> => {
	try {
		const { data, status } = await HTTP.post<IUserSignInResponse>(
			'/auth/signin',
			obj,
		);
		return [data, status];
	} catch (error) {
		errorHandler(error as AxiosError);
	}
};
