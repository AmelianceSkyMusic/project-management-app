import { IBoardResponse, TBoardId, TStatus } from '../commonApiTypes';

export interface IUpdateBoardById {
	boardId: TBoardId;
	body: {
		title: string;
		owner: string;
		users: string[];
	};
}

export interface IUpdateBoardByIdResponse {
	data: IBoardResponse;
	status: TStatus;
}
