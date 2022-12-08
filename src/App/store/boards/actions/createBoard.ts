import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { ICreateBoard } from '~types/api/boards/createBoard';

export const createBoard = createAsyncThunk(
	'boardsSlice/createBoard',
	async (params: ICreateBoard, thunkAPI) => {
		try {
			return await api.boards.createBoard(params);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
