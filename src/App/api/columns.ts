import { IColumnParams } from '../types/api';
import { deleteCommon } from './common/delete';
import { getCommon } from './common/get';
import { queryGenerator } from './common/helpers';
import { postCommon } from './common/post';
import { putCommon } from './common/put';

export const getColumnsInBoard = (boardId: string) => getCommon(`/boards/${boardId}/columns`);
export const createColumn = (body: IColumnParams, boardId: string) => postCommon(body, `/boards/${boardId}/columns`);
export const getColumnById = (boardId: string, columnId: string) => getCommon(`/boards/${boardId}/columns/${columnId}`);
export const updateColumnById = (body: IColumnParams, boardId: string, columnId: string) => putCommon(body, `/boards/${boardId}/columns/${columnId}`);
export const deleteColumnById = (boardId: string, columnId: string) => deleteCommon(`/boards/${boardId}/columns/${columnId}`);
export const getColumnsByIdsListOrUserId = (columnIdList = [''], userId = '') => getCommon(`columnsSet?${queryGenerator(columnIdList, userId)}`);
