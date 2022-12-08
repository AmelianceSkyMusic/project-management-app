import { IBoardResponse, TBoardId, TStatus } from '../commonApiTypes';

export type TDeleteBoardById = TBoardId

export interface IDeleteBoardByIdResponse {
	data: IBoardResponse;
	status: TStatus;
}
