import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '~api/index';
import { rejectErrorMessage } from '~store/helpers/rejectErrorMessage';
import { TGetBoardsByIdsList } from '~types/api/boards/getBoardsByIdsList';

export const getBoardsByIdsList = createAsyncThunk(
	'boardsSlice/getBoardsByIdsList',
	async (boardIdList: TGetBoardsByIdsList, thunkAPI) => {
		try {
			return await api.boards.getBoardsByIdsList(boardIdList);
		} catch (error) {
			return thunkAPI.rejectWithValue(rejectErrorMessage);
		}
	},
);
