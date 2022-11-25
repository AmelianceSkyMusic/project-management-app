import { IPointsList, IPointsStatus, IQueryData } from '../types/api';
import { deleteCommon } from './common/delete';
import { getCommon } from './common/get';
import { patchCommon } from './common/patch';
import { postCommon } from './common/post';

type TAllPoints = Promise<{
   data: IPointsList[] ;
   status: number;
} | {
   data: null;
   status: number | null;
}>

type TPoint = Promise<{
   data: IPointsList ;
   status: number;
} | {
   data: null;
   status: number | null;
}>

export const getPointsByIdsListOrUserId = (queryData: IQueryData) => getCommon(`/points?${new URLSearchParams(queryData).toString()}`) as TAllPoints;
export const createPoint = (body: IPointsList) => postCommon(body, '/points') as TPoint;
export const updateSetOfPoints = (body: IPointsStatus[]) => patchCommon(body, '/points') as TAllPoints;
export const getPointsByTaskId = (taskId: string) => getCommon(`/points/${taskId}`)as TAllPoints;
export const updatePoint = (body: IPointsStatus) => patchCommon(body, '/points') as TPoint;
export const deletePointById = (pointId: string) => deleteCommon(`/points/${pointId}`) as TPoint;
