import {
	ITaskResponse,
	TBoardId, TColumnId, TStatus, TTaskId,
} from '../commonApiTypes';

export interface IDeleteTaskById {
	boardId: TBoardId;
	columnId: TColumnId;
	taskId: TTaskId;

}

export interface IDeleteTaskByIdResponse {
	data: ITaskResponse;
	status: TStatus;
}
