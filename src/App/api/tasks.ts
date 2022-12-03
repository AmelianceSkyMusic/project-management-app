import {
	IColumnOrder, IQueryData, ITask, ITaskParams, ITaskParamsUpdate,
} from '../types/api';
import { deleteCommon } from './common/delete';
import { getCommon } from './common/get';
import { patchCommon } from './common/patch';
import { postCommon } from './common/post';
import { putCommon } from './common/put';

type TTasks = Promise<{
   data: ITask[] ;
   status: number;
} | {
   data: null;
   status: number | null;
}>

type TTask = Promise<{
   data: ITaskParams | ITaskParamsUpdate;
   status: number;
} | {
   data: null;
   status: number | null;
}>

export const getTasksInColumn = (boardId: string, columnId: string) => getCommon(`/boards/${boardId}/columns/${columnId}/tasks`) as TTasks;
export const createTask = (body: ITaskParams, boardId: string, columnId: string) => postCommon(body, `/boards/${boardId}/columns/${columnId}/tasks`) as TTask;
export const getTasksById = (boardId: string, columnId: string, taskId: string) => getCommon(`/boards/${boardId}/columns/${columnId}/tasks/${taskId}`) as TTasks;
export const updateTaskById = (body: ITaskParamsUpdate, boardId: string, columnId: string, taskId: string) => putCommon(body, `/boards/${boardId}/columns/${columnId}/tasks/${taskId}`) as TTask;
export const deleteTaskById = (boardId: string, columnId: string, taskId: string) => deleteCommon(`/boards/${boardId}/columns/${columnId}/tasks/${taskId}`) as TTask;
export const getTasksByIdsList = (queryData: IQueryData) => getCommon(`/tasksSet?${new URLSearchParams(queryData).toString()}`) as TTasks;
export const updateSetOfTasks = (body: IColumnOrder[]) => patchCommon(body, '/tasksSet') as TTasks;
export const getTasksByBoardId = (boardId: string) => getCommon(`/tasksSet/${boardId}`) as TTasks;
