import { AxiosError } from 'axios';

import {
	IBadRequest, IBoard, IColumn, IColumnParams, IPointsList,
	ITask, IUser,
} from '../../types/api';
import { errorHandler } from './errorHandler';
import HTTP from './http-common';

type TBody = | IUser | IBoard | IColumnParams | IColumn[] | ITask | IPointsList
type TReturnData = | IBadRequest | IColumn[]
| IPointsList | IUser

export const postCommon = async (body: TBody, endpoint: string) => {
	try {
		const { data, status } = await HTTP.post<TReturnData>(
			endpoint,
			body,
		);
		return { data, status };

	} catch (error) {
		const status = errorHandler(error as AxiosError);
		return { data: null, status };
	}
};
