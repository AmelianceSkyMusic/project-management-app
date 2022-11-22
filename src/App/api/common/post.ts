/* eslint-disable @typescript-eslint/naming-convention */
import { AxiosError } from 'axios';

import {
	IBadRequest,
	IBoard, IColumn, IColumnParams, ITask, IUser, IUserLogInResponse, IUserSignUpResponse,
} from '../../types/api';
import { errorHandler } from './errorHandler';
import HTTP from './http-common';

type Body = | IUser | IBoard | IColumnParams | IColumn[] | ITask
type ReturnData = | IUserSignUpResponse | IUserLogInResponse | IBadRequest | IColumn[]

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
