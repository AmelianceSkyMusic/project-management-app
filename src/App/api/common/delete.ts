import { AxiosError } from 'axios';

import { IBoard, IUser } from '../../types/api';
import { errorHandler } from './errorHandler';
import HTTP from './http-common';

// eslint-disable-next-line @typescript-eslint/naming-convention
type ReturnData = | IUser | IBoard

export const deleteCommon = async (endpoint = '') => {
	try {
		const { data, status } = await HTTP.delete<ReturnData>(endpoint);
		return [data, status];

	} catch (error) {
		errorHandler(error as AxiosError);
		return null;
	}
};
