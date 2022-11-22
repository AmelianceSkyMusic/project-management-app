import { getCommon } from './common/get';

export const getTasksInColumn = (boardId: string, columnId: string) => getCommon(`/boards/${boardId}/columns/${columnId}/tasks`);
