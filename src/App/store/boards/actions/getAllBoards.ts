import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';

export const getAllBoards = createAsyncThunk(
	'boardsSlice/getAllBoards',
	async (_, thunkAPI) => {
		try {
			return await api.boards.getAllBoards();
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
