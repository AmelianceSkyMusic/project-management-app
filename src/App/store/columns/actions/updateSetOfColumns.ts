import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { TUpdateSetOfColumns } from '~types/api/columns/updateSetOfColumns';

export const updateSetOfColumns = createAsyncThunk(
	'columnsSlice/updateSetOfColumns',
	async (params: TUpdateSetOfColumns, thunkAPI) => {
		try {
			return await api.columns.updateSetOfColumns(params);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
