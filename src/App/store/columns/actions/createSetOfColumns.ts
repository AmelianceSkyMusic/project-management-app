import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { TCreateSetOfColumns } from '~types/api/columns/createSetOfColumns';

export const createSetOfColumns = createAsyncThunk(
	'columnsSlice/createSetOfColumns',
	async (params: TCreateSetOfColumns, thunkAPI) => {
		try {
			return await api.columns.createSetOfColumns(params);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
