import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';

export const getAllUsers = createAsyncThunk(
	'usersSlice/getAllUsers',
	async (_, thunkAPI) => {
		try {
			return await api.users.getAllUsers();
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
