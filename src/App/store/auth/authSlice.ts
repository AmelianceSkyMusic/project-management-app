import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ISignInUserResponse } from '~types/api/auth/signIn';
import { ISingUpUserResponse } from '~types/api/auth/singUp';
import { IError } from '~types/api/commonApiTypes';

import { signIn } from './actions/signIn';
import { signUp } from './actions/signUp';

const initAuthSlice = {
	isLoading: false,
	error: '',
	auth: {
		newCreatedUser: {},
		token: '',
	},
};

export const authSlice = createSlice({
	name: 'authSlice',
	initialState: initAuthSlice,
	reducers: {
	},
	extraReducers: (builder) => {
		builder

			.addCase(signUp.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.auth.newCreatedUser = {};
			})
			.addCase(
				signUp.fulfilled,
				(state, action: PayloadAction<ISingUpUserResponse | IError | unknown>) => {
					if ((action?.payload as ISingUpUserResponse)?.status === 200) {
						state.auth.newCreatedUser = (action?.payload as ISingUpUserResponse).data;
					} else if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(signUp.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			})

			.addCase(signIn.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.auth.token = '';
			})
			.addCase(
				signIn.fulfilled,
				(state, action: PayloadAction<ISignInUserResponse | IError | unknown>) => {
					if ((action?.payload as ISignInUserResponse)?.status === 200) {
						state.auth.token = (action?.payload as ISignInUserResponse).data.token;
					} else if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(signIn.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			});
	},
});
