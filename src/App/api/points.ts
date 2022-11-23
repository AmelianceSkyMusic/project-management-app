import { IPointsList, IPointsStatus } from '../types/api';
import { deleteCommon } from './common/delete';
import { getCommon } from './common/get';
import { queryGenerator } from './common/helpers';
import { patchCommon } from './common/patch';
import { postCommon } from './common/post';

export const getPointsByIdsListOrUserId = (listId: string[], userId: string) => getCommon(`/points?${queryGenerator(listId, userId)}`);
export const createPoint = (body: IPointsList) => postCommon(body, '/points');
export const updateSetOfPoints = (body: IPointsStatus[]) => patchCommon(body, '/points');
export const getPointsByTaskId = (taskId: string) => getCommon(`/points/${taskId}`);
export const updatePoint = (body: IPointsStatus) => patchCommon(body, '/points');
export const deletePointById = (pointId: string) => deleteCommon(`/points/${pointId}`);
