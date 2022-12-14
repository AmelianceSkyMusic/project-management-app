import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { TGetTasksByIdsListUserIdSearchRequests } from '~types/api/tasks/getTasksByIdsListUserIdSearchRequests';

export const getTasksByIdsListUserIdSearchRequests = createAsyncThunk(
	'tasksSlice/getTasksByIdsListUserIdSearchRequests',
	async (params: TGetTasksByIdsListUserIdSearchRequests, thunkAPI) => {
		try {
			return await api.tasks.getTasksByIdsListUserIdSearchRequests(params);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
