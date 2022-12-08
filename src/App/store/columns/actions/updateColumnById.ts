import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { IUpdateColumnById } from '~types/api/columns/updateColumnById';

export const updateColumnById = createAsyncThunk(
	'columnsSlice/updateColumnById',
	async ({ boardId, columnId, body }: IUpdateColumnById, thunkAPI) => {
		try {
			return await api.columns.updateColumnById(body, boardId, columnId);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
