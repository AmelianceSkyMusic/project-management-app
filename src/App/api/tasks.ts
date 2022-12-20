import { ICreateTask } from '~types/api/tasks/createTask';
import { TGetTasksByIdsListUserIdSearchRequests } from '~types/api/tasks/getTasksByIdsListUserIdSearchRequests';
import { IUpdateTaskById } from '~types/api/tasks/updateTaskById';

import { IColumnOrder } from '../types/api';
import { deleteCommon } from './common/deleteCommon';
import { getCommon } from './common/getCommon';
import { patchCommon } from './common/patchCommon';
import { postCommon } from './common/postCommon';
import { putCommon } from './common/putCommon';

const getTasksInColumn = (boardId: string, columnId: string) => getCommon(`/boards/${boardId}/columns/${columnId}/tasks`);
const createTask = ({ body, boardId, columnId }: ICreateTask) => postCommon(body, `/boards/${boardId}/columns/${columnId}/tasks`);
const getTaskById = (boardId: string, columnId: string, taskId: string) => getCommon(`/boards/${boardId}/columns/${columnId}/tasks/${taskId}`);
const updateTaskById = ({
	body, boardId, columnId, taskId,
}: IUpdateTaskById) => putCommon(body, `/boards/${boardId}/columns/${columnId}/tasks/${taskId}`);
const deleteTaskById = (boardId: string, columnId: string, taskId: string) => deleteCommon(`/boards/${boardId}/columns/${columnId}/tasks/${taskId}`);
const getTasksByIdsListUserIdSearchRequests = (queryData: TGetTasksByIdsListUserIdSearchRequests) => getCommon(`/tasksSet?${queryData.toString()}`); // !
const updateSetOfTasks = (body: IColumnOrder[]) => patchCommon(body, '/tasksSet');
const getTasksByBoardId = (boardId: string) => getCommon(`/tasksSet/${boardId}`);

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
