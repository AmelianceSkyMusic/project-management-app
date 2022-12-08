import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { IUpdateUserById } from '~types/api/users/updateUserById';

export const updateUserById = createAsyncThunk(
	'usersSlice/updateUserById',
	async ({ userId, body }: IUpdateUserById, thunkAPI) => {
		try {
			return await api.users.updateUserById(userId, body);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
