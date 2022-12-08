import { IUser, TStatus } from '../commonApiTypes';

export interface IGetAllUsersResponse {
	data: IUser[];
	status: TStatus;
}
