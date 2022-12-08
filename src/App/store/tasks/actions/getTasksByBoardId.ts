import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { TGetTasksByBoardId } from '~types/api/tasks/getTasksByBoardId';

export const getTasksByBoardId = createAsyncThunk(
	'tasksSlice/getTasksByBoardId',
	async (params: TGetTasksByBoardId, thunkAPI) => {
		try {
			return await api.tasks.getTasksByBoardId(params);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
