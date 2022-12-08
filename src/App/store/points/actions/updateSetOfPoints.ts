import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { TUpdateSetOfPoints } from '~types/api/points/updateSetOfPoints';

export const updateSetOfPoints = createAsyncThunk(
	'pointsSlice/updateSetOfPoints',
	async (params: TUpdateSetOfPoints, thunkAPI) => {
		try {
			return await api.points.updateSetOfPoints(params);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
