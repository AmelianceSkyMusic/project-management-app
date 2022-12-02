export interface IUser {
	token?: string;
	_id?: string;
	name?: string;
	login: string;
	password: string;
}

export interface IBadRequest {
	statusCode: string;
	message: string;
}

export interface IPostBoard {
   title: string;
   owner: string;
   users: string[];
}
export interface IBoard extends IPostBoard {
   _id: string;
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
	columnId?: string;
}

export interface ITask {
	_id?: string;
	title: string;
   order: number;
   boardId?: string;
   columnId?: string;
   description: string;
   userId: number;
   users: string[];
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
