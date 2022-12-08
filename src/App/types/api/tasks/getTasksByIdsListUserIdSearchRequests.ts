import {
	ITaskResponse, TStatus, TTaskId, TUserId,
} from '../commonApiTypes';

export type TGetTasksByIdsListUserIdSearchRequests = TTaskId[] | TUserId | string;

export interface IGetTasksByIdsListUserIdSearchRequestsResponse {
	data: ITaskResponse[];
	status: TStatus;
}
