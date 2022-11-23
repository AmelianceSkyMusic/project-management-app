/* eslint-disable @typescript-eslint/naming-convention */
import { AxiosError } from 'axios';

import {
	IBadRequest, IColumn, IColumnOrder, ITask,
} from '../../types/api';
import { errorHandler } from './errorHandler';
import HTTP from './http-common';

type Body = | IColumnOrder[]
type ReturnData = | IColumn[] | IBadRequest | ITask[]

export const patchCommon = async (body: Body, endpoint: string) => {
	try {
		const { data, status } = await HTTP.patch<ReturnData>(
			endpoint,
			body,
		);
		return [data, status];

	} catch (error) {
		errorHandler(error as AxiosError);
		return null;
	}
};
