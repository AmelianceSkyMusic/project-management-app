import { IBoardResponse, TBoardId, TStatus } from '../commonApiTypes';

export type TGetBoardById = TBoardId

export interface IGetBoardByIdResponse {
	data: IBoardResponse;
	status: TStatus;
}
