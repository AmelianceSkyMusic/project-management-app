import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { TGetColumnsByIdsListOrUserId } from '~types/api/columns/getColumnsByIdsListOrUserId';

export const getColumnsByIdsListOrUserId = createAsyncThunk(
	'columnsSlice/getColumnsByIdsListOrUserId',
	async (params: TGetColumnsByIdsListOrUserId, thunkAPI) => {
		try {
			return await api.columns.getColumnsByIdsListOrUserId(params);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
