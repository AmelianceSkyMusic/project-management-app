import { AxiosError } from 'axios';

import {
	IBoard, IColumn, IPointsList, ITask, IUser, IUserSignUpResponse,
} from '../../types/api';
import { errorHandler } from './errorHandler';
import HTTP from './http-common';

// eslint-disable-next-line @typescript-eslint/naming-convention
type ReturnData =
	| IUser[] | IUser | IUserSignUpResponse | IBoard[] | IBoard | IColumn | ITask[] | ITask
	| IPointsList[]

export const getCommon = async (endpoint = '') => {
	try {
		const { data, status } = await HTTP.get<ReturnData>(endpoint);
		return [data, status];

	} catch (error) {
		errorHandler(error as AxiosError);
		return null;
	}
};
