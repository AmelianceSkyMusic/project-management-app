import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { TDeleteUserById } from '~types/api/users/deleteUserById';

export const deleteUserById = createAsyncThunk(
	'usersSlice/deleteUserById',
	async (params: TDeleteUserById, thunkAPI) => {
		try {
			return await api.users.deleteUserById(params);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
