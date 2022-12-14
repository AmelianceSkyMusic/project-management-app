import { IColumnResponse, TStatus } from '../commonApiTypes';

export type TGetColumnsInBoard = string;

export interface IGetColumnsInBoardResponse {
	data: IColumnResponse[];
	status: TStatus;
}
