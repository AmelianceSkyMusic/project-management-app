import {
	ITaskResponse, TBoardId, TColumnId, TStatus,
} from '../commonApiTypes';

export interface IGetTasksInColumn {
	boardId: TBoardId;
	columnId: TColumnId;
}

export interface IGetTasksInColumnResponse {
	data: ITaskResponse[];
	status: TStatus;
}
