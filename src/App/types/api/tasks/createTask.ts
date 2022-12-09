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
		userId: string;
		users: string[];
	};
}

export interface ICreateTaskResponse {
	data: ITaskResponse;
	status: TStatus;
}
