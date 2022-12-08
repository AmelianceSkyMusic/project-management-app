import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { IGetTasksInColumn } from '~types/api/tasks/getTasksInColumn';

export const getTasksInColumn = createAsyncThunk(
	'tasksSlice/getTasksInColumn',
	async ({ boardId, columnId }: IGetTasksInColumn, thunkAPI) => {
		try {
			return await api.tasks.getTasksInColumn(boardId, columnId);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
