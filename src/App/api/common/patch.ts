import { AxiosError } from 'axios';

import {
	IBadRequest, IColumn, IColumnOrder, IPointsList, IPointsStatus, ITask, ITasksOrder,
} from '../../types/api';
import { errorHandler } from './errorHandler';
import HTTP from './http-common';

type TBody = | IColumnOrder[] | IPointsStatus[] | IPointsStatus | ITasksOrder[]
type TReturnData = | IColumn[] | IBadRequest | ITask[] | IPointsList[] | IColumn

export const patchCommon = async (body: TBody, endpoint: string) => {
	try {
		const { data, status } = await HTTP.patch<TReturnData>(
			endpoint,
			body,
		);
		return { data, status };

	} catch (error) {
		const status = errorHandler(error as AxiosError);
		return { data: null, status };
	}
};
