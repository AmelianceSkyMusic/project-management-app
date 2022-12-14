import {
	IColumnResponse, TBoardId, TColumnId, TStatus,
} from '../commonApiTypes';

export interface IUpdateColumnById {
	boardId: TBoardId;
	columnId: TColumnId;
	body: {
		title: string;
		order: number;
	};
}

export interface IUpdateColumnByIdResponse {
	data: IColumnResponse;
	status: TStatus;
}
