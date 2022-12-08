import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IError, IPointResponse } from '~types/api/commonApiTypes';
import { ICreatePointResponse } from '~types/api/points/createPoint';
import { IDeletePointByIdResponse } from '~types/api/points/deletePointById';
import { IGetPointsByIdsListOrUserIdResponse } from '~types/api/points/getPointsByIdsListOrUserId';
import { IGetPointsByTaskIdResponse } from '~types/api/points/getPointsByTaskId';
import { IUpdatePointResponse } from '~types/api/points/updatePoint';
import { IUpdateSetOfPointsResponse } from '~types/api/points/updateSetOfPoints';

import { createPoint } from './actions/createPoint';
import { deletePointById } from './actions/deletePointById';
import { getPointsByIdsListOrUserId } from './actions/getPointsByIdsListOrUserId';
import { getPointsByTaskId } from './actions/getPointsByTaskId';
import { updatePoint } from './actions/updatePoint';
import { updateSetOfPoints } from './actions/updateSetOfPoints';

const initBoardSlice = {
	isLoading: false,
	error: '',
	points: {
		foundedPoints: [] as IPointResponse[],
		createdPoint: {},
		updatedPoint: {},
		deletedPoint: {},
	},
};

export const pointsSlice = createSlice({
	name: 'pointsSlice',
	initialState: initBoardSlice,
	reducers: {
	},
	extraReducers: (builder) => {
		builder

			.addCase(getPointsByIdsListOrUserId.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.points.foundedPoints = [];
			})
			.addCase(
				getPointsByIdsListOrUserId.fulfilled,
				(state, action: PayloadAction<IGetPointsByIdsListOrUserIdResponse | IError | unknown>) => {
					if ((action?.payload as IGetPointsByIdsListOrUserIdResponse)?.status === 200) {
						state.points.foundedPoints = (
							action?.payload as IGetPointsByIdsListOrUserIdResponse
						).data;
					} else if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(getPointsByIdsListOrUserId.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			})

			.addCase(createPoint.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.points.createdPoint = {};
			})
			.addCase(
				createPoint.fulfilled,
				(state, action: PayloadAction<ICreatePointResponse | IError | unknown>) => {
					if ((action?.payload as ICreatePointResponse)?.status === 200) {
						state.points.createdPoint = (
							action?.payload as ICreatePointResponse
						).data;
					} else if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(createPoint.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			})

			.addCase(updateSetOfPoints.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.points.updatedPoint = {};
			})
			.addCase(
				updateSetOfPoints.fulfilled,
				(state, action: PayloadAction<IUpdateSetOfPointsResponse | IError | unknown>) => {
					if ((action?.payload as IUpdateSetOfPointsResponse)?.status === 200) {
						state.points.updatedPoint = (
							action?.payload as IUpdateSetOfPointsResponse
						).data;
					} else if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(updateSetOfPoints.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			})

			.addCase(getPointsByTaskId.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.points.foundedPoints = [];
			})
			.addCase(
				getPointsByTaskId.fulfilled,
				(state, action: PayloadAction<IGetPointsByTaskIdResponse | IError | unknown>) => {
					if ((action?.payload as IGetPointsByTaskIdResponse)?.status === 200) {
						state.points.foundedPoints = (
							action?.payload as IGetPointsByTaskIdResponse
						).data;
					} else if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(getPointsByTaskId.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			})

			.addCase(updatePoint.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.points.updatedPoint = {};
			})
			.addCase(
				updatePoint.fulfilled,
				(state, action: PayloadAction<IUpdatePointResponse | IError | unknown>) => {
					if ((action?.payload as IUpdatePointResponse)?.status === 200) {
						state.points.updatedPoint = (
							action?.payload as IUpdatePointResponse
						).data;
					} else if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(updatePoint.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			})

			.addCase(deletePointById.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.points.deletedPoint = {};
			})
			.addCase(
				deletePointById.fulfilled,
				(state, action: PayloadAction<IDeletePointByIdResponse | IError | unknown>) => {
					if ((action?.payload as IDeletePointByIdResponse)?.status === 200) {
						state.points.deletedPoint = (
							action?.payload as IDeletePointByIdResponse
						).data;
					} else if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(deletePointById.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			});

	},
});
