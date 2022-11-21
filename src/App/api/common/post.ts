import { AxiosError } from 'axios';

import { IUser, IUserLogInResponse, IUserSignUpResponse } from '../../types/api';
import { errorHandler } from './errorHandler';
import HTTP from './http-common';

export const postCommon = async (body: IUser, endpoint: string) => {
	try {
		const { data, status } = await HTTP.post<IUserSignUpResponse | IUserLogInResponse>(
			endpoint,
			body,
		);
		return [data, status];

	} catch (error) {
		errorHandler(error as AxiosError);
		return null;
	}

};
