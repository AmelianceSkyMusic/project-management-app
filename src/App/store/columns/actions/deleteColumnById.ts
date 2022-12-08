import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { IDeleteColumnById } from '~types/api/columns/deleteColumnById';

export const deleteColumnById = createAsyncThunk(
	'columnsSlice/deleteColumnById',
	async ({ boardId, columnId }: IDeleteColumnById, thunkAPI) => {
		try {
			return await api.columns.deleteColumnById(boardId, columnId);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
