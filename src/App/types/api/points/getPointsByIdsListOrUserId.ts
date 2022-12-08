import {
	IPointResponse,
	TPointId, TStatus, TUserId,
} from '../commonApiTypes';

export type TGetPointsByIdsListOrUserId = TPointId[] | TUserId;

export interface IGetPointsByIdsListOrUserIdResponse {
	data: IPointResponse[];
	status: TStatus;
}
