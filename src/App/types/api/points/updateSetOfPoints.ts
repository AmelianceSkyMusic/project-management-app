import { IPointResponse, TStatus } from '../commonApiTypes';

export type TUpdateSetOfPoints = {
	_id: string;
	done: boolean;
}[];

export interface IUpdateSetOfPointsResponse {
	data: IPointResponse;
	status: TStatus;
}
