import { ITaskResponse, TBoardId, TStatus } from '../commonApiTypes';

export type TGetTasksByBoardId = TBoardId;

export interface IGetTasksByBoardIdResponse {
	data: ITaskResponse[];
	status: TStatus;
}
