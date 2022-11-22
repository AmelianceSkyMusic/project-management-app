import { getCommon } from './common/get';

export const getColumnsInBoard = (boardId: string) => getCommon(`/boards/${boardId}/columns`);
