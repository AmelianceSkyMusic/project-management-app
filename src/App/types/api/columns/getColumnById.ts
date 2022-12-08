import {
	IColumnResponse, TBoardId, TColumnId, TStatus,
} from '../commonApiTypes';

export interface IGetColumnById {
	boardId: TBoardId;
	columnId: TColumnId;
}

export interface IGetColumnByIdResponse {
	data: IColumnResponse;
	status: TStatus;
}
