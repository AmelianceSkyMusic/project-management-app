import { IPointResponse, TStatus } from '../commonApiTypes';

export interface ICreatePoint {
	title: string;
	taskId: string;
	boardId: string;
	done: boolean;
}

export interface ICreatePointResponse {
	data: IPointResponse;
	status: TStatus;
}
