import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { IUpdatePoint } from '~types/api/points/updatePoint';

export const updatePoint = createAsyncThunk(
	'pointsSlice/updatePoint',
	async (params: IUpdatePoint, thunkAPI) => {
		try {
			return await api.points.updatePoint(params);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
