import { IPointResponse, TPointId, TStatus } from '../commonApiTypes';

export interface IDeletePointById {
	pointId: TPointId;
}

export interface IDeletePointByIdResponse {
	data: IPointResponse;
	status: TStatus;
}
