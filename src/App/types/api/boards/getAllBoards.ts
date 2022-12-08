import { IBoardResponse, TStatus } from '../commonApiTypes';

export interface IGetAllBoardsResponse {
	data: IBoardResponse[];
	status: TStatus;
}
