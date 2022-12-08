import { IBoardResponse, TBoardId, TStatus } from '../commonApiTypes';

export type TGetBoardsByIdsList = TBoardId[];

export interface IGetBoardsByIdsListResponse {
	data: IBoardResponse[];
	status: TStatus;
}
