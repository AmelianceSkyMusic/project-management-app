import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { TGetBoardById } from '~types/api/boards/getBoardById';

export const getBoardById = createAsyncThunk(
	'boardsSlice/getBoardById',
	async (boardId: TGetBoardById, thunkAPI) => {
		try {
			return await api.boards.getBoardById(boardId);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
