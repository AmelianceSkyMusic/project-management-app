import { TCreateSetOfColumns } from '~types/api/columns/createSetOfColumns';
import { TGetColumnsByIdsListOrUserId } from '~types/api/columns/getColumnsByIdsListOrUserId';

import { IColumnOrder, IColumnParams } from '../types/api';
import { deleteCommon } from './common/deleteCommon';
import { getCommon } from './common/getCommon';
import { patchCommon } from './common/patchCommon';
import { postCommon } from './common/postCommon';
import { putCommon } from './common/putCommon';

export const getColumnsInBoard = (boardId: string) => getCommon(`/boards/${boardId}/columns`);
export const createColumn = (body: IColumnParams, boardId: string) => postCommon(body, `/boards/${boardId}/columns`);
export const getColumnById = (boardId: string, columnId: string) => getCommon(`/boards/${boardId}/columns/${columnId}`);
export const updateColumnById = (body: IColumnParams, boardId: string, columnId: string) => putCommon(body, `/boards/${boardId}/columns/${columnId}`);
export const deleteColumnById = (boardId: string, columnId: string) => deleteCommon(`/boards/${boardId}/columns/${columnId}`);
export const getColumnsByIdsListOrUserId = (queryData: TGetColumnsByIdsListOrUserId) => getCommon(`/columnsSet?${queryData.toString()}`); // !
export const updateSetOfColumns = (body: IColumnOrder[]) => patchCommon(body, '/columnsSet');
export const createSetOfColumns = (body: TCreateSetOfColumns) => postCommon(body, '/columnsSet'); // !

export const columns = {
	getColumnsInBoard,
	createColumn,
	getColumnById,
	updateColumnById,
	deleteColumnById,
	getColumnsByIdsListOrUserId,
	updateSetOfColumns,
	createSetOfColumns,
};
