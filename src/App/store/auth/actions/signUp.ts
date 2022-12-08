import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { ISingUpUser } from '~types/api/auth/singUp';

export const signUp = createAsyncThunk(
	'authSlice/signUp',
	async (params: ISingUpUser, thunkAPI) => {
		try {
			return await api.auth.signUp(params);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
