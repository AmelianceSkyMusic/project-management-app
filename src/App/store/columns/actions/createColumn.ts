import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { ICreateColumn } from '~types/api/columns/createColumn';

export const createColumn = createAsyncThunk(
	'columnsSlice/createColumn',
	async ({ boardId, body }: ICreateColumn, thunkAPI) => {
		try {
			return await api.columns.createColumn(body, boardId);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
