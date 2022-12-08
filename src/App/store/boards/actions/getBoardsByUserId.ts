import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { TGetBoardsByUserId } from '~types/api/boards/getBoardsByUserId';

export const getBoardsByUserId = createAsyncThunk(
	'boardsSlice/getBoardsByUserId',
	async (userId: TGetBoardsByUserId, thunkAPI) => {
		try {
			return await api.boards.getBoardsByUserId(userId);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
