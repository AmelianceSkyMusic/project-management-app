import {
	ITaskResponse, TBoardId, TColumnId, TStatus,
} from '../commonApiTypes';

export interface ICreateTask {
	boardId: TBoardId;
	columnId: TColumnId;
	body: {
		title: string;
		order: number;
		description: string;
		userId: number;
		users: string[];
	};
}

export interface ICreateTaskResponse {
	data: ITaskResponse;
	status: TStatus;
}
