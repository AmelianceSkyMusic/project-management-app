import { IUser, TStatus, TUserId } from '../commonApiTypes';

export type TDeleteUserById = TUserId

export interface IDeleteUserByIdResponse {
	data: IUser;
	status: TStatus;
}
