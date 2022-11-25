import { AxiosError } from 'axios';

import {
	IBoard, IPoint, ITask, IUser,
} from '../../types/api';
import { errorHandler } from './errorHandler';
import HTTP from './http-common';

type TReturnData = | IUser | IBoard | ITask | IPoint

export const deleteCommon = async (endpoint = '') => {
	try {
		const { data, status } = await HTTP.delete<TReturnData>(endpoint);
		return [data, status];

	} catch (error) {
		errorHandler(error as AxiosError);
		return null;
	}
};
