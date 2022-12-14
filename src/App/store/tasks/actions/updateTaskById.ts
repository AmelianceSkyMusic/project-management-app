import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { IUpdateTaskById } from '~types/api/tasks/updateTaskById';

export const updateTaskById = createAsyncThunk(
	'tasksSlice/updateTaskById',
	async ({
		boardId, columnId, taskId, body,
	}: IUpdateTaskById, thunkAPI) => {
		try {
			return await api.tasks.updateTaskById({
				body, boardId, columnId, taskId,
			});
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
