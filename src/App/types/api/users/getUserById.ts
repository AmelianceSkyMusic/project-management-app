import { IUser, TStatus, TUserId } from '../commonApiTypes';

export type TGetUserById = TUserId

export interface IGetUserByIdResponse {
	data: IUser;
	status: TStatus;
}
