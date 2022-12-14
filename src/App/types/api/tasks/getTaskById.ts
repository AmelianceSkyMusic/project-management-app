import {
	ITaskResponse,
	TBoardId, TColumnId, TStatus, TTaskId,
} from '../commonApiTypes';

export interface IGetTaskById {
	boardId: TBoardId;
	columnId: TColumnId;
	taskId: TTaskId;
}

export interface IGetTaskByIdResponse {
	data: ITaskResponse;
	status: TStatus;
}
