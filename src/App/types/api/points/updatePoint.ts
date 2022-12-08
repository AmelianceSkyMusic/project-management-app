import { IPointResponse, TPointId, TStatus } from '../commonApiTypes';

export interface IUpdatePoint {
	pointId: TPointId;
	body: {
		title: string;
		done: boolean;
	};
}

export interface IUpdatePointResponse {
	data: Omit<IPointResponse, 'done'>;
	status: TStatus;
}
