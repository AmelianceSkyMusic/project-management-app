import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { IGetTaskById } from '~types/api/tasks/getTaskById';

export const getTaskById = createAsyncThunk(
	'tasksSlice/getTaskById',
	async ({ boardId, columnId, taskId }: IGetTaskById, thunkAPI) => {
		try {
			return await api.tasks.getTaskById(boardId, columnId, taskId);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
