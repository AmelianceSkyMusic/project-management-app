import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { ICreatePoint } from '~types/api/points/createPoint';

export const createPoint = createAsyncThunk(
	'pointsSlice/createPoint',
	async (params: ICreatePoint, thunkAPI) => {
		try {
			return await api.points.createPoint(params);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
