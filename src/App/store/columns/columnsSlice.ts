import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICreateColumnResponse } from '~types/api/columns/createColumn';
import { ICreateSetOfColumnsResponse } from '~types/api/columns/createSetOfColumns';
import { IDeleteColumnByIdResponse } from '~types/api/columns/deleteColumnById';
import { IGetColumnByIdResponse } from '~types/api/columns/getColumnById';
import { IGetColumnsByIdsListOrUserIdResponse } from '~types/api/columns/getColumnsByIdsListOrUserId';
import { IGetColumnsInBoardResponse } from '~types/api/columns/getColumnsInBoard';
import { IUpdateColumnByIdResponse } from '~types/api/columns/updateColumnById';
import { IUpdateSetOfColumnsResponse } from '~types/api/columns/updateSetOfColumns';
import { IColumnResponse, IError } from '~types/api/commonApiTypes';

import { createColumn } from './actions/createColumn';
import { createSetOfColumns } from './actions/createSetOfColumns';
import { deleteColumnById } from './actions/deleteColumnById';
import { getColumnById } from './actions/getColumnById';
import { getColumnsByIdsListOrUserId } from './actions/getColumnsByIdsListOrUserId';
import { getColumnsInBoard } from './actions/getColumnsInBoard';
import { updateColumnById } from './actions/updateColumnById';
import { updateSetOfColumns } from './actions/updateSetOfColumns';

const initBoardSlice = {
	isLoading: false,
	error: '',
	columns: {
		all: [] as IColumnResponse[],
		createdColumn: {},
		foundedColumn: {},
		updatedColumn: {},
		deletedColumn: {},
		foundedColumns: [] as IColumnResponse[],
		updatedColumns: [] as IColumnResponse[],
		createdColumns: [] as IColumnResponse[],
	},
};

export const columnsSlice = createSlice({
	name: 'columnsSlice',
	initialState: initBoardSlice,
	reducers: {
	},
	extraReducers: (builder) => {
		builder

			.addCase(getColumnsInBoard.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.columns.all = [];
			})
			.addCase(
				getColumnsInBoard.fulfilled,
				(state, action: PayloadAction<IGetColumnsInBoardResponse | IError | unknown>) => {
					if ((action?.payload as IGetColumnsInBoardResponse)?.status === 200) {
						state.columns.all = (action?.payload as IGetColumnsInBoardResponse).data;
					} else if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(getColumnsInBoard.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			})

			.addCase(createColumn.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.columns.createdColumn = {};
			})
			.addCase(
				createColumn.fulfilled,
				(state, action: PayloadAction<ICreateColumnResponse | IError | unknown>) => {
					if ((action?.payload as ICreateColumnResponse)?.status === 200) {
						state.columns.createdColumn = (action?.payload as ICreateColumnResponse).data;
					} else if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(createColumn.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			})

			.addCase(getColumnById.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.columns.foundedColumn = {};
			})
			.addCase(
				getColumnById.fulfilled,
				(state, action: PayloadAction<IGetColumnByIdResponse | IError | unknown>) => {
					if ((action?.payload as IGetColumnByIdResponse)?.status === 200) {
						state.columns.foundedColumn = (action?.payload as IGetColumnByIdResponse).data;
					} else if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(getColumnById.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			})

			.addCase(updateColumnById.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.columns.updatedColumn = {};
			})
			.addCase(
				updateColumnById.fulfilled,
				(state, action: PayloadAction<IUpdateColumnByIdResponse | IError | unknown>) => {
					if ((action?.payload as IUpdateColumnByIdResponse)?.status === 200) {
						state.columns.updatedColumn = (action?.payload as IUpdateColumnByIdResponse).data;
					} else if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(updateColumnById.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			})

			.addCase(deleteColumnById.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.columns.deletedColumn = {};
			})
			.addCase(
				deleteColumnById.fulfilled,
				(state, action: PayloadAction<IDeleteColumnByIdResponse | IError | unknown>) => {
					if ((action?.payload as IDeleteColumnByIdResponse)?.status === 200) {
						state.columns.deletedColumn = (action?.payload as IDeleteColumnByIdResponse).data;
					} else if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(deleteColumnById.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			})

			.addCase(getColumnsByIdsListOrUserId.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.columns.foundedColumns = [];
			})
			.addCase(
				getColumnsByIdsListOrUserId.fulfilled,
				(state, action: PayloadAction<IGetColumnsByIdsListOrUserIdResponse | IError | unknown>) => {
					if ((action?.payload as IGetColumnsByIdsListOrUserIdResponse)?.status === 200) {
						state.columns.foundedColumns = (
							action?.payload as IGetColumnsByIdsListOrUserIdResponse
						).data;
					} else if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(getColumnsByIdsListOrUserId.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			})

			.addCase(updateSetOfColumns.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.columns.updatedColumns = [];
			})
			.addCase(
				updateSetOfColumns.fulfilled,
				(state, action: PayloadAction<IUpdateSetOfColumnsResponse | IError | unknown>) => {
					if ((action?.payload as IUpdateSetOfColumnsResponse)?.status === 200) {
						state.columns.updatedColumns = (action?.payload as IUpdateSetOfColumnsResponse).data;
					} else if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(updateSetOfColumns.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			})

			.addCase(createSetOfColumns.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.columns.createdColumns = [];
			})
			.addCase(
				createSetOfColumns.fulfilled,
				(state, action: PayloadAction<ICreateSetOfColumnsResponse | IError | unknown>) => {
					if ((action?.payload as ICreateSetOfColumnsResponse)?.status === 200) {
						state.columns.createdColumns = (action?.payload as ICreateSetOfColumnsResponse).data;
					} else if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(createSetOfColumns.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			});

	},
});
