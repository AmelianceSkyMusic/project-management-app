import {
	IColumn, IColumnOrder, IColumnParams, IQueryData,
} from '../types/api';
import { deleteCommon } from './common/delete';
import { getCommon } from './common/get';
import { patchCommon } from './common/patch';
import { postCommon } from './common/post';
import { putCommon } from './common/put';

type TAllColumns = Promise<{
   data: IColumn[] ;
   status: number;
} | {
   data: null;
   status: number | null;
}>

type TColumn = Promise<{
   data: IColumn ;
   status: number;
} | {
   data: null;
   status: number | null;
}>

export const getColumnsInBoard = (boardId: string) => getCommon(`/boards/${boardId}/columns`) as TAllColumns;
export const createColumn = (body: IColumnParams, boardId: string) => postCommon(body, `/boards/${boardId}/columns`) as TColumn;
export const getColumnById = (boardId: string, columnId: string) => getCommon(`/boards/${boardId}/columns/${columnId}`) as TColumn;
export const updateColumnById = (body: IColumnParams, boardId: string, columnId: string) => putCommon(body, `/boards/${boardId}/columns/${columnId}`) as TColumn;
export const deleteColumnById = (boardId: string, columnId: string) => deleteCommon(`/boards/${boardId}/columns/${columnId}`) as TColumn;
export const getColumnsByIdsListOrUserId = (queryData: IQueryData) => getCommon(`/columnsSet?${new URLSearchParams(queryData).toString()}`) as TAllColumns;
export const updateSetOfColumns = (body: IColumnOrder[]) => patchCommon(body, '/columnsSet') as TAllColumns;
export const createSetOfColumns = (body: IColumn) => postCommon(body, '/columnsSet') as TAllColumns;
