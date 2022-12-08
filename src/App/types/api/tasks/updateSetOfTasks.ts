import { ITaskResponse, TStatus } from '../commonApiTypes';

export type TUpdateSetOfTasks = {
	_id: string;
	order: number;
	columnId: string;
}[]

export interface IUpdateSetOfTasksResponse {
	data: ITaskResponse[];
	status: TStatus;
}
