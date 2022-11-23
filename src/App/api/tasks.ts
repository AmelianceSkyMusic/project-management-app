import { ITask } from '../types/api';
import { deleteCommon } from './common/delete';
import { getCommon } from './common/get';
import { queryGenerator } from './common/helpers';
import { postCommon } from './common/post';
import { putCommon } from './common/put';

export const getTasksInColumn = (boardId: string, columnId: string) => getCommon(`/boards/${boardId}/columns/${columnId}/tasks`);
export const createTask = (body: ITask, boardId: string, columnId: string) => postCommon(body, `/boards/${boardId}/columns/${columnId}/tasks`);
export const getTasksById = (boardId: string, columnId: string, taskId: string) => getCommon(`/boards/${boardId}/columns/${columnId}/tasks/${taskId}`);
export const updateTasksById = (body: ITask, boardId: string, columnId: string, taskId: string) => putCommon(body, `/boards/${boardId}/columns/${columnId}/tasks/${taskId}`);
export const deleteTasksById = (boardId: string, columnId: string, taskId: string) => deleteCommon(`/boards/${boardId}/columns/${columnId}/tasks/${taskId}`);
export const getTasksByIdsList = (listId: string[], userId: string, search: string) => getCommon(`/tasksSet?${queryGenerator(listId, userId, search)}`);
