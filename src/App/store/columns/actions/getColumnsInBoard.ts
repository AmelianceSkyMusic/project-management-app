import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { TGetColumnsInBoard } from '~types/api/columns/getColumnsInBoard';

export const getColumnsInBoard = createAsyncThunk(
	'columnsSlice/getColumnsInBoard',
	async (boardId: TGetColumnsInBoard, thunkAPI) => {
		try {
			return await api.columns.getColumnsInBoard(boardId);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
