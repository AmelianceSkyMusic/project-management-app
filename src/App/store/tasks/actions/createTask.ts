import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { ICreateTask } from '~types/api/tasks/createTask';

export const createTask = createAsyncThunk(
	'tasksSlice/createTask',
	async ({ boardId, columnId, body }: ICreateTask, thunkAPI) => {
		try {
			return await api.tasks.createTask(body, boardId, columnId);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
