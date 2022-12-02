import { AxiosError } from 'axios';

import {
	IBadRequest, IBoard, IColumnParams, IPostBoard, IUser,
} from '../../types/api';
import { errorHandler } from './errorHandler';
import HTTP from './http-common';

type TBody = | IUser | IColumnParams | IBoard | IPostBoard
type TReturnData = | IUser | IBadRequest

export const putCommon = async (body: TBody, endpoint = '') => {
	try {
		const { data, status } = await HTTP.put<TReturnData>(
			endpoint,
			body,
		);
		return { data, status };

	} catch (error) {
		const status = errorHandler(error as AxiosError);
		return { data: null, status };
	}
};
