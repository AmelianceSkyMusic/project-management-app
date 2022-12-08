import { TCreateSetOfColumns } from '~types/api/columns/createSetOfColumns';
import { TGetColumnsByIdsListOrUserId } from '~types/api/columns/getColumnsByIdsListOrUserId';

import { IColumnOrder, IColumnParams } from '../types/api';
import { deleteCommon } from './common/deleteCommon';
import { getCommon } from './common/getCommon';
import { patchCommon } from './common/patchCommon';
import { postCommon } from './common/postCommon';
import { putCommon } from './common/putCommon';

const getColumnsInBoard = (boardId: string) => getCommon(`/boards/${boardId}/columns`);
const createColumn = (body: IColumnParams, boardId: string) => postCommon(body, `/boards/${boardId}/columns`);
const getColumnById = (boardId: string, columnId: string) => getCommon(`/boards/${boardId}/columns/${columnId}`);
const updateColumnById = (body: IColumnParams, boardId: string, columnId: string) => putCommon(body, `/boards/${boardId}/columns/${columnId}`);
const deleteColumnById = (boardId: string, columnId: string) => deleteCommon(`/boards/${boardId}/columns/${columnId}`);
const getColumnsByIdsListOrUserId = (queryData: TGetColumnsByIdsListOrUserId) => getCommon(`/columnsSet?${queryData.toString()}`); // !
const updateSetOfColumns = (body: IColumnOrder[]) => patchCommon(body, '/columnsSet');
const createSetOfColumns = (body: TCreateSetOfColumns) => postCommon(body, '/columnsSet'); // !

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
