import { TToken } from '../commonApiTypes';

export interface ISignInUser {
	login: string;
	password: string;
}

export interface ISignInUserResponse {
	data: {
		token: TToken;
	};
	status: number;
}
