import { IUser } from '../commonApiTypes';

export interface ISingUpUser {
	name: string;
	login: string;
	password: string;
}

export interface ISingUpUserResponse {
	data: IUser;
	status: number;
}
