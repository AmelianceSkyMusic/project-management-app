import { IColumnResponse, TStatus } from '../commonApiTypes';

export type TGetColumnsByIdsListOrUserId = string[] | string

export interface IGetColumnsByIdsListOrUserIdResponse {
	data: IColumnResponse[];
	status: TStatus;
}
