import { IColumnResponse, TBoardId, TStatus } from '../commonApiTypes';

export interface ICreateColumn {
	boardId: TBoardId;
	body: {
		title: string;
		order: number;
	};
}

export interface ICreateColumnResponse {
	data: IColumnResponse;
	status: TStatus;
}
