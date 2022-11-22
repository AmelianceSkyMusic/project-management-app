import { IColumnParams } from '../types/api';
import { getCommon } from './common/get';
import { postCommon } from './common/post';

export const getColumnsInBoard = (boardId: string) => getCommon(`/boards/${boardId}/columns`);
export const createColumn = (body: IColumnParams, boardId: string) => postCommon(body, `/boards/${boardId}/columns`);
export const getColumnById = (boardId: string, columnId: string) => getCommon(`/boards/${boardId}/columns/${columnId}`);
