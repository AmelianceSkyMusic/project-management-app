import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { IGetColumnById } from '~types/api/columns/getColumnById';

export const getColumnById = createAsyncThunk(
	'columnsSlice/getColumnById',
	async ({ boardId, columnId }: IGetColumnById, thunkAPI) => {
		try {
			return await api.columns.getColumnById(boardId, columnId);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
