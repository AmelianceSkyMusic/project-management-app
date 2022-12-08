import { IColumnResponse, TStatus } from '../commonApiTypes';

export type TUpdateSetOfColumns = {
	_id: string;
	order: number;
}[];

export interface IUpdateSetOfColumnsResponse {
	data: IColumnResponse[];
	status: TStatus;
}
