import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { TGetUserById } from '~types/api/users/getUserById';

export const getUserById = createAsyncThunk(
	'usersSlice/getUserById',
	async (params: TGetUserById, thunkAPI) => {
		try {
			return await api.users.getUserById(params);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
