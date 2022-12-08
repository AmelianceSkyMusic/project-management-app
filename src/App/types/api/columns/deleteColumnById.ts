import {
	IColumnResponse, TBoardId, TColumnId, TStatus,
} from '../commonApiTypes';

export interface IDeleteColumnById {
	boardId: TBoardId;
	columnId: TColumnId;
}

export interface IDeleteColumnByIdResponse {
	data: IColumnResponse;
	status: TStatus;
}
