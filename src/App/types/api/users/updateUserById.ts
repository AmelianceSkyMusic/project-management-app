import { IUser, TStatus, TUserId } from '../commonApiTypes';

export interface IUpdateUserById {
	userId: TUserId;
	body: {
		name: string;
		login: string;
		password: string;
	};
}

export interface IUpdateUserByIdResponse {
	data: IUser;
	status: TStatus;
}
