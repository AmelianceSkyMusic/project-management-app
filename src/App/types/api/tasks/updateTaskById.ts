import {
	ITaskResponse,
	TBoardId, TColumnId, TStatus, TTaskId,
} from '../commonApiTypes';

export interface IUpdateTaskById {
	boardId: TBoardId;
	columnId: TColumnId;
	taskId: TTaskId;
	body: {
		title: string;
		order: number;
		description: string;
		columnId: string;
		userId: number;
		users: string[];
	};
}

export interface IUpdateTaskByIdResponse {
	data: ITaskResponse;
	status: TStatus;
}
