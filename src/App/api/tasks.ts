import { ITask } from '../types/api';
import { getCommon } from './common/get';
import { postCommon } from './common/post';

export const getTasksInColumn = (boardId: string, columnId: string) => getCommon(`/boards/${boardId}/columns/${columnId}/tasks`);
export const createTask = (body: ITask, boardId: string, columnId: string) => postCommon(body, `/boards/${boardId}/columns/${columnId}/tasks`);
