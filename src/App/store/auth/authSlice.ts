import { decodeToken } from 'react-jwt';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ISignInUserResponse } from '~types/api/auth/signIn';
import { ISingUpUserResponse } from '~types/api/auth/singUp';
import { IError, IUser } from '~types/api/commonApiTypes';
import { IDecodedToken } from '~types/IDecodedToken';

import { signIn } from './actions/signIn';
import { signUp } from './actions/signUp';

interface IInitAuthSlice {
	isLoading: boolean;
	error: string;
	auth: {
		newCreatedUser: IUser;
		token: string;
		id: string;
		login: string;
	};
}

const initAuthSlice: IInitAuthSlice = {
	isLoading: false,
	error: '',
	auth: {
		newCreatedUser: {} as IUser,
		token: '',
		id: '',
		login: '',
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
				state.auth.newCreatedUser = {} as IUser;
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
				state.auth.id = '';
				state.auth.login = '';
			})
			.addCase(
				signIn.fulfilled,
				(state, action: PayloadAction<ISignInUserResponse | IError | unknown>) => {
					if ((action?.payload as ISignInUserResponse)?.status === 200) {
						const { token } = (action?.payload as ISignInUserResponse).data;
						localStorage.setItem('token', token);
						const decodedToken = decodeToken(token) as IDecodedToken;
						state.auth.token = token;
						state.auth.id = decodedToken.id;
						state.auth.login = decodedToken.login;

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
