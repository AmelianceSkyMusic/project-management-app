import { ICreateTask } from '~types/api/tasks/createTask';
import { TGetTasksByIdsListUserIdSearchRequests } from '~types/api/tasks/getTasksByIdsListUserIdSearchRequests';
import { IUpdateTaskById } from '~types/api/tasks/updateTaskById';

import { IColumnOrder } from '../types/api';
import { deleteCommon } from './common/deleteCommon';
import { getCommon } from './common/getCommon';
import { patchCommon } from './common/patchCommon';
import { postCommon } from './common/postCommon';
import { putCommon } from './common/putCommon';

export const getTasksInColumn = (boardId: string, columnId: string) => getCommon(`/boards/${boardId}/columns/${columnId}/tasks`);
export const createTask = ({ body, boardId, columnId }: ICreateTask) => postCommon(body, `/boards/${boardId}/columns/${columnId}/tasks`);
export const getTaskById = (boardId: string, columnId: string, taskId: string) => getCommon(`/boards/${boardId}/columns/${columnId}/tasks/${taskId}`);
export const updateTaskById = ({
	body, boardId, columnId, taskId,
}: IUpdateTaskById) => putCommon(body, `/boards/${boardId}/columns/${columnId}/tasks/${taskId}`);
export const deleteTaskById = (boardId: string, columnId: string, taskId: string) => deleteCommon(`/boards/${boardId}/columns/${columnId}/tasks/${taskId}`);
export const getTasksByIdsListUserIdSearchRequests = (queryData: TGetTasksByIdsListUserIdSearchRequests) => getCommon(`/tasksSet?${queryData.toString()}`); // !
export const updateSetOfTasks = (body: IColumnOrder[]) => patchCommon(body, '/tasksSet');
export const getTasksByBoardId = (boardId: string) => getCommon(`/tasksSet/${boardId}`);

export const tasks = {
	getTasksInColumn,
	createTask,
	getTaskById,
	updateTaskById,
	deleteTaskById,
	getTasksByIdsListUserIdSearchRequests,
	updateSetOfTasks,
	getTasksByBoardId,
};
