import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { IDeleteTaskById } from '~types/api/tasks/deleteTaskById';

export const deleteTaskById = createAsyncThunk(
	'tasksSlice/deleteTaskById',
	async ({ boardId, columnId, taskId	}: IDeleteTaskById, thunkAPI) => {
		try {
			return await api.tasks.deleteTaskById(boardId, columnId, taskId);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
