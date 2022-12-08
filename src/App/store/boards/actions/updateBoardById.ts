import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { IUpdateBoardById } from '~types/api/boards/updateBoardById';

export const updateBoardById = createAsyncThunk(
	'boardsSlice/updateBoardById',
	async ({ boardId, body }: IUpdateBoardById, thunkAPI) => {
		try {
			return await api.boards.updateBoardById(body, boardId);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
