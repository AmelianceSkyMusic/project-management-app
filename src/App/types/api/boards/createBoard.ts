import { IBoardResponse, TStatus } from '../commonApiTypes';

export interface ICreateBoard {
	title: string;
	owner: string;
	users: string[];
}

export interface ICreateBoardResponse {
	data: IBoardResponse;
	status: TStatus;
}
