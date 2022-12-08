import { TGetPointsByIdsListOrUserId } from '~types/api/points/getPointsByIdsListOrUserId';
import { IUpdatePoint } from '~types/api/points/updatePoint';

import { IPointsList, IPointsStatus } from '../types/api';
import { deleteCommon } from './common/deleteCommon';
import { getCommon } from './common/getCommon';
import { patchCommon } from './common/patchCommon';
import { postCommon } from './common/postCommon';

const getPointsByIdsListOrUserId = (queryData: TGetPointsByIdsListOrUserId) => getCommon(`/points?${queryData.toString()}`); // !
const createPoint = (body: IPointsList) => postCommon(body, '/points');
const updateSetOfPoints = (body: IPointsStatus[]) => patchCommon(body, '/points');
const getPointsByTaskId = (taskId: string) => getCommon(`/points/${taskId}`);
const updatePoint = (params: IUpdatePoint) => patchCommon(params.body, `/points/${params.pointId}`); // !
const deletePointById = (pointId: string) => deleteCommon(`/points/${pointId}`);

export const points = {
	getPointsByIdsListOrUserId,
	createPoint,
	updateSetOfPoints,
	getPointsByTaskId,
	updatePoint,
	deletePointById,
};
