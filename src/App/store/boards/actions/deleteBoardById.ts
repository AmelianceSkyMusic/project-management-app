import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { TDeleteBoardById } from '~types/api/boards/deleteBoardById';

export const deleteBoardById = createAsyncThunk(
	'boardsSlice/deleteBoardById',
	async (boardId: TDeleteBoardById, thunkAPI) => {
		try {
			return await api.boards.deleteBoardById(boardId);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
