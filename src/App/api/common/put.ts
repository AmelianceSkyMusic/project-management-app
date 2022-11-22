/* eslint-disable @typescript-eslint/naming-convention */
import { AxiosError } from 'axios';

import { IBadRequest, IColumnParams, IUser } from '../../types/api';
import { errorHandler } from './errorHandler';
import HTTP from './http-common';

type Body = | IUser | IColumnParams
type ReturnData = | IUser | IBadRequest

export const putCommon = async (body: Body, endpoint = '') => {
	try {
		const { data, status } = await HTTP.put<ReturnData>(
			endpoint,
			body,
		);
		return [data, status];

	} catch (error) {
		errorHandler(error as AxiosError);
		return null;
	}
};
