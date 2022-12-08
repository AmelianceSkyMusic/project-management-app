import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICreateBoardResponse } from '~types/api/boards/createBoard';
import { IDeleteBoardByIdResponse } from '~types/api/boards/deleteBoardById';
import { IGetAllBoardsResponse } from '~types/api/boards/getAllBoards';
import { IGetBoardByIdResponse } from '~types/api/boards/getBoardById';
import { IGetBoardsByIdsListResponse } from '~types/api/boards/getBoardsByIdsList';
import { IGetBoardsByUserIdResponse } from '~types/api/boards/getBoardsByUserId';
import { IUpdateBoardByIdResponse } from '~types/api/boards/updateBoardById';
import { IBoardResponse, IError } from '~types/api/commonApiTypes';

import { createBoard } from './actions/createBoard';
import { deleteBoardById } from './actions/deleteBoardById';
import { getAllBoards } from './actions/getAllBoards';
import { getBoardById } from './actions/getBoardById';
import { getBoardsByIdsList } from './actions/getBoardsByIdsList';
import { getBoardsByUserId } from './actions/getBoardsByUserId';
import { updateBoardById } from './actions/updateBoardById';

const initBoardSlice = {
	isLoading: false,
	error: '',
	boards: {
		all: [] as IBoardResponse[],
		lastCreated: {},
		foundedBoard: {},
		updatedBoard: {},
		lastDeletedBoard: {},
		foundedBoards: [] as IBoardResponse[],
	},
};

export const boardsSlice = createSlice({
	name: 'boardsSlice',
	initialState: initBoardSlice,
	reducers: {
	},
	extraReducers: (builder) => {
		builder

			.addCase(getAllBoards.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.boards.all = [];
			})
			.addCase(
				getAllBoards.fulfilled,
				(state, action: PayloadAction<IGetAllBoardsResponse | IError | unknown>) => {

					if ((action?.payload as IGetAllBoardsResponse)?.status === 200) {
						state.boards.all = (action?.payload as IGetAllBoardsResponse).data;
					} else if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}

					state.isLoading = false;
				},
			)
			.addCase(getAllBoards.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			})

			.addCase(createBoard.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.boards.lastCreated = {};
			})
			.addCase(
				createBoard.fulfilled,
				(state, action: PayloadAction<ICreateBoardResponse | IError | unknown>) => {
					if ((action?.payload as ICreateBoardResponse)?.status === 200) {
						state.boards.lastCreated = (action?.payload as ICreateBoardResponse).data;
					} else
					if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(createBoard.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			})

			.addCase(getBoardById.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.boards.foundedBoard = {};
			})
			.addCase(
				getBoardById.fulfilled,
				(state, action: PayloadAction<IGetBoardByIdResponse | IError | unknown>) => {
					if ((action?.payload as IGetBoardByIdResponse)?.status === 200) {
						state.boards.foundedBoard = (action?.payload as IGetBoardByIdResponse).data;
					} else
					if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(getBoardById.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			})

			.addCase(updateBoardById.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.boards.updatedBoard = {};
			})
			.addCase(
				updateBoardById.fulfilled,
				(state, action: PayloadAction<IUpdateBoardByIdResponse | IError | unknown>) => {
					if ((action?.payload as IUpdateBoardByIdResponse)?.status === 200) {
						state.boards.updatedBoard = (action?.payload as IUpdateBoardByIdResponse).data;
					} else
					if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(updateBoardById.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			})

			.addCase(deleteBoardById.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.boards.lastDeletedBoard = {};
			})
			.addCase(
				deleteBoardById.fulfilled,
				(state, action: PayloadAction<IDeleteBoardByIdResponse | IError | unknown>) => {
					if ((action?.payload as IDeleteBoardByIdResponse)?.status === 200) {
						state.boards.lastDeletedBoard = (action?.payload as IDeleteBoardByIdResponse).data;
					} else
					if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(deleteBoardById.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			})

			.addCase(getBoardsByIdsList.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.boards.foundedBoards = [];
			})
			.addCase(
				getBoardsByIdsList.fulfilled,
				(state, action: PayloadAction<IGetBoardsByIdsListResponse | IError | unknown>) => {
					if ((action?.payload as IGetBoardsByIdsListResponse)?.status === 200) {
						state.boards.foundedBoards = (action?.payload as IGetBoardsByIdsListResponse).data;
					} else
					if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(getBoardsByIdsList.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			})

			.addCase(getBoardsByUserId.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.boards.foundedBoards = [];
			})
			.addCase(
				getBoardsByUserId.fulfilled,
				(state, action: PayloadAction<IGetBoardsByUserIdResponse | IError | unknown>) => {
					if ((action?.payload as IGetBoardsByUserIdResponse)?.status === 200) {
						state.boards.foundedBoards = (action?.payload as IGetBoardsByUserIdResponse).data;
					} else
					if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(getBoardsByUserId.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			});
	},
});
