import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { TGetPointsByTaskId } from '~types/api/points/getPointsByTaskId';

export const getPointsByTaskId = createAsyncThunk(
	'pointsSlice/getPointsByTaskId',
	async (params: TGetPointsByTaskId, thunkAPI) => {
		try {
			return await api.points.getPointsByTaskId(params);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
