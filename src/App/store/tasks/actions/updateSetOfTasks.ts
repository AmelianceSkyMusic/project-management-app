import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { TUpdateSetOfTasks } from '~types/api/tasks/updateSetOfTasks';

export const updateSetOfTasks = createAsyncThunk(
	'tasksSlice/updateSetOfTasks',
	async (params: TUpdateSetOfTasks, thunkAPI) => {
		try {
			return await api.tasks.updateSetOfTasks(params);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
