import { AxiosError } from 'axios';

import { IUser, IUserSignUpResponse } from '../../types/api';
import { errorHandler } from './errorHandler';
import HTTP from './http-common';

export const createUser = async (
	obj: IUser,
// eslint-disable-next-line consistent-return
): Promise<(number | IUserSignUpResponse)[] | undefined> => {
	try {
		const { data, status } = await HTTP.post<IUserSignUpResponse>(
			'/auth/signin',
			obj,
		);
		return [data, status];
	} catch (error) {
		errorHandler(error as AxiosError);
	}
};
