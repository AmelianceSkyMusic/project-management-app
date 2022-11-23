import { IPointsList, IPointsStatus } from '../types/api';
import { deleteCommon } from './common/delete';
import { getCommon } from './common/get';
import { queryGenerator } from './common/helpers';
import { patchCommon } from './common/patch';
import { postCommon } from './common/post';
import { putCommon } from './common/put';

export const getPointsByIdsListOrUserId = (listId: string[], userId: string) => getCommon(`/points?${queryGenerator(listId, userId)}`);
export const createPoint = (body: IPointsList) => postCommon(body, '/points');
export const updateSetOfPoints = (body: IPointsStatus[]) => patchCommon(body, '/points');
