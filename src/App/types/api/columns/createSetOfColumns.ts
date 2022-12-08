import { IColumnResponse, TStatus } from '../commonApiTypes';

export type TCreateSetOfColumns = {
	title: string;
	order: 0;
	boardId: string;
}[]

export interface ICreateSetOfColumnsResponse {
	data: IColumnResponse[];
	status: TStatus;
}
