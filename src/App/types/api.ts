export interface IUser {
	token?: string;
	_id?: string;
	name?: string;
	login: string;
	password: string;
}

export interface IColumn {
   _id: string;
   title: string;
   order: number;
   boardId: string;
}

export interface IColumnParams {
	title: string;
	order: number;
}

export interface IColumnOrder {
	_id: string;
	order: number;
}
export interface ITasksOrder extends IColumnOrder {
	columnId: string;
}

export interface ITask {
	_id: string;
	title: string;
   order: number;
   boardId: string;
   columnId: string;
   description: string;
   userId: string;
   users: string[];
}
export interface ITaskParams {
	title: string;
   order: number;
	description: string;
	userId: string;
   users: string[];
}
export interface ITaskParamsUpdate extends ITaskParams {
	columnId: string;
}
export interface IPointsList {
	_id?: string;
   title: string;
   taskId: string;
   boardId: string;
   done: boolean;
}

export interface IPointsStatus {
	_id: string;
   done: boolean;
}

export interface IPoint {
	_id: string;
	name: string;
	taskId: string;
	boardId: string;
	path: string;
}

export interface IQueryData {
	[key: string]: string;
}
