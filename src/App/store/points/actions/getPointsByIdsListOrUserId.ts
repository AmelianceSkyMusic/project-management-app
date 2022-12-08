import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { TGetPointsByIdsListOrUserId } from '~types/api/points/getPointsByIdsListOrUserId';

export const getPointsByIdsListOrUserId = createAsyncThunk(
	'pointsSlice/getPointsByIdsListOrUserId',
	async (params: TGetPointsByIdsListOrUserId, thunkAPI) => {
		try {
			return await api.points.getPointsByIdsListOrUserId(params);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
