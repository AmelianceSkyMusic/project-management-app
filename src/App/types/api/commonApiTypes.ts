export type TBoardId = string

export type TColumnId = string

export type TTaskId = string

export type TPointId = string

export type TUserId = string

export type TToken = string

export type TStatus = number

export interface IUser {
	_id: string;
	name: string;
	login: string;
}

export interface IBoardResponse {
	_id: string;
	title: string;
	owner: string;
	users: string[];
}

export interface IColumnResponse {
	_id: string;
	title: string;
	order: number;
	boardId: string;
}

export interface ITaskResponse {
   _id: string;
	title: string;
	order: number;
	boardId: string;
	columnId: string;
	description: string;
	userId: string;
	users: string[];
}

export interface IPointResponse {
	_id: string;
	title: string;
	taskId: string;
	boardId: string;
	done: boolean;
}

export interface IError {
	data: {
		statusCode: number;
		message: string;
	};
	status: TStatus;
}
