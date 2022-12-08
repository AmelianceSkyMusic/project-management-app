import { IPointResponse, TStatus, TTaskId } from '../commonApiTypes';

export type TGetPointsByTaskId = TTaskId;

export interface IGetPointsByTaskIdResponse {
	data: IPointResponse[];
	status: TStatus;
}
