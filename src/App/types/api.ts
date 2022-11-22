export interface IUser {
	_id?: string;
	name?: string;
	login: string;
	password: string;
}

export interface IUserSignUpResponse {
	token?: string;
	statusCode?: string;
	message?: string;
}

export interface IUserLogInResponse {
	_id: string;
	name: string;
	login: string;
	statusCode: number;
	message: string;
}

export interface IBadRequest {
	statusCode: string;
	message: string;
}

export interface IBoard {
   _id?: string;
   title: string;
   owner: string;
   users: string[];
}

export interface IColumn {
   _id?: string;
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
