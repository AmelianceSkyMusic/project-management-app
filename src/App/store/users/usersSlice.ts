import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IError, IUser } from '~types/api/commonApiTypes';
import { IDeleteUserByIdResponse } from '~types/api/users/deleteUserById';
import { IGetAllUsersResponse } from '~types/api/users/getAllUsers';
import { IGetUserByIdResponse } from '~types/api/users/getUserById';
import { IUpdateUserByIdResponse } from '~types/api/users/updateUserById';

import { deleteUserById } from './actions/deleteUserById';
import { getAllUsers } from './actions/getAllUsers';
import { getUserById } from './actions/getUserById';
import { updateUserById } from './actions/updateUserById';

const initAuthSlice = {
	isLoading: false,
	error: '',
	users: {
		all: [] as IUser[],
		lastFounded: {},
		lastUpdated: {},
		lastDeleted: {},
	},
};

export const usersSlice = createSlice({
	name: 'usersSlice',
	initialState: initAuthSlice,
	reducers: {
	},
	extraReducers: (builder) => {
		builder

			.addCase(getAllUsers.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.users.all = [];
			})
			.addCase(
				getAllUsers.fulfilled,
				(state, action: PayloadAction<IGetAllUsersResponse | IError | unknown>) => {
					if ((action?.payload as IGetAllUsersResponse)?.status === 200) {
						state.users.all = (action?.payload as IGetAllUsersResponse).data;
					} else if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(getAllUsers.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			})

			.addCase(getUserById.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.users.lastFounded = {};
			})
			.addCase(
				getUserById.fulfilled,
				(state, action: PayloadAction<IGetUserByIdResponse | IError | unknown>) => {
					if ((action?.payload as IGetUserByIdResponse)?.status === 200) {
						state.users.lastFounded = (action?.payload as IGetUserByIdResponse).data;
					} else if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(getUserById.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			})

			.addCase(updateUserById.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.users.lastUpdated = {};
			})
			.addCase(
				updateUserById.fulfilled,
				(state, action: PayloadAction<IUpdateUserByIdResponse | IError | unknown>) => {
					if ((action?.payload as IUpdateUserByIdResponse)?.status === 200) {
						state.users.lastUpdated = (action?.payload as IUpdateUserByIdResponse).data;
					} else if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(updateUserById.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			})

			.addCase(deleteUserById.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.users.lastDeleted = {};
			})
			.addCase(
				deleteUserById.fulfilled,
				(state, action: PayloadAction<IDeleteUserByIdResponse | IError | unknown>) => {
					if ((action?.payload as IDeleteUserByIdResponse)?.status === 200) {
						state.users.lastDeleted = (action?.payload as IDeleteUserByIdResponse).data;
					} else if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(deleteUserById.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			});

	},
});
