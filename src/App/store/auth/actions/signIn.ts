import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { ISignInUser } from '~types/api/auth/signIn';

export const signIn = createAsyncThunk(
	'authSlice/signIn',
	async (params: ISignInUser, thunkAPI) => {
		try {
			return await api.auth.signIn(params);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
