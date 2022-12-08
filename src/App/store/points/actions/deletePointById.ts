import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { IDeletePointById } from '~types/api/points/deletePointById';

export const deletePointById = createAsyncThunk(
	'pointsSlice/deletePointById',
	async ({ pointId }: IDeletePointById, thunkAPI) => {
		try {
			return await api.points.deletePointById(pointId);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
