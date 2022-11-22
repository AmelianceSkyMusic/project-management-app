/* eslint-disable @typescript-eslint/naming-convention */
import { AxiosError } from 'axios';

import {
	IBadRequest,
	IBoard, IUser, IUserLogInResponse, IUserSignUpResponse,
} from '../../types/api';
import { errorHandler } from './errorHandler';
import HTTP from './http-common';

type Body = | IUser | IBoard
type ReturnData = | IUserSignUpResponse | IUserLogInResponse | IBadRequest

export const postCommon = async (body: Body, endpoint: string) => {
	try {
		const { data, status } = await HTTP.post<ReturnData>(
			endpoint,
			body,
		);
		return [data, status];

	} catch (error) {
		errorHandler(error as AxiosError);
		return null;
	}
};
