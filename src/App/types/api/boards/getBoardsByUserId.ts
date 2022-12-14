import { IBoardResponse, TBoardId, TStatus } from '../commonApiTypes';

export type TGetBoardsByUserId = TBoardId

export interface IGetBoardsByUserIdResponse {
	data: IBoardResponse[];
	status: TStatus;
}
