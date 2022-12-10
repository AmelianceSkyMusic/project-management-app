import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IError, ITaskResponse } from '~types/api/commonApiTypes';
import { ICreateTaskResponse } from '~types/api/tasks/createTask';
import { IDeleteTaskByIdResponse } from '~types/api/tasks/deleteTaskById';
import { IGetTaskByIdResponse } from '~types/api/tasks/getTaskById';
import { IGetTasksByBoardIdResponse } from '~types/api/tasks/getTasksByBoardId';
import { IGetTasksByIdsListUserIdSearchRequestsResponse } from '~types/api/tasks/getTasksByIdsListUserIdSearchRequests';
import { IGetTasksInColumnResponse } from '~types/api/tasks/getTasksInColumn';
import { IUpdateSetOfTasksResponse } from '~types/api/tasks/updateSetOfTasks';
import { IUpdateTaskByIdResponse } from '~types/api/tasks/updateTaskById';

import { createTask } from './actions/createTask';
import { deleteTaskById } from './actions/deleteTaskById';
import { getTaskById } from './actions/getTaskById';
import { getTasksByBoardId } from './actions/getTasksByBoardId';
import { getTasksByIdsListUserIdSearchRequests } from './actions/getTasksByIdsListUserIdSearchRequests';
import { getTasksInColumn } from './actions/getTasksInColumn';
import { updateSetOfTasks } from './actions/updateSetOfTasks';
import { updateTaskById } from './actions/updateTaskById';

const initBoardSlice = {
	isLoading: false,
	error: '',
	tasks: {
		inColumns: {} as Record<TColumnId, ITaskResponse[]>,
		createdTask: {},
		foundedTask: {},
		updatedTask: {},
		deletedTask: {},
		foundedTasks: [] as ITaskResponse[],
		updatedTasks: [] as ITaskResponse[],
	},
};

export const tasksSlice = createSlice({
	name: 'tasksSlice',
	initialState: initBoardSlice,
	reducers: {
	},
	extraReducers: (builder) => {
		builder

			.addCase(getTasksInColumn.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.tasks.inColumns = {} as Record<TColumnId, ITaskResponse[]>;
			})
			.addCase(
				getTasksInColumn.fulfilled,
				(state, action: PayloadAction<IGetTasksInColumnResponse | IError | unknown>) => {
					if ((action?.payload as IGetTasksInColumnResponse)?.status === 200) {
						const { data } = action?.payload as IGetTasksInColumnResponse;
						if (data.length > 0) {
							const { columnId } = data[0];
							state.tasks.inColumns = { ...state.tasks.inColumns, [columnId]: data };
						}
					} else if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(getTasksInColumn.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			})

			.addCase(createTask.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.tasks.createdTask = {};
			})
			.addCase(
				createTask.fulfilled,
				(state, action: PayloadAction<ICreateTaskResponse | IError | unknown>) => {
					if ((action?.payload as ICreateTaskResponse)?.status === 200) {
						state.tasks.createdTask = (action?.payload as ICreateTaskResponse).data;
					} else if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(createTask.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			})

			.addCase(getTaskById.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.tasks.foundedTask = {};
			})
			.addCase(
				getTaskById.fulfilled,
				(state, action: PayloadAction<IGetTaskByIdResponse | IError | unknown>) => {
					if ((action?.payload as IGetTaskByIdResponse)?.status === 200) {
						state.tasks.foundedTask = (action?.payload as IGetTaskByIdResponse).data;
					} else if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(getTaskById.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			})

			.addCase(updateTaskById.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.tasks.updatedTask = {};
			})
			.addCase(
				updateTaskById.fulfilled,
				(state, action: PayloadAction<IUpdateTaskByIdResponse | IError | unknown>) => {
					if ((action?.payload as IUpdateTaskByIdResponse)?.status === 200) {
						state.tasks.updatedTask = (action?.payload as IUpdateTaskByIdResponse).data;
					} else if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(updateTaskById.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			})

			.addCase(deleteTaskById.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.tasks.deletedTask = {};
			})
			.addCase(
				deleteTaskById.fulfilled,
				(state, action: PayloadAction<IDeleteTaskByIdResponse | IError | unknown>) => {
					if ((action?.payload as IDeleteTaskByIdResponse)?.status === 200) {
						state.tasks.deletedTask = (action?.payload as IDeleteTaskByIdResponse).data;
					} else if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(
				deleteTaskById.rejected,
				(state, action: PayloadAction<unknown>) => {
					(state.error as unknown) = action.payload;
					state.isLoading = false;
				},
			)

			.addCase(getTasksByIdsListUserIdSearchRequests.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.tasks.foundedTasks = [];
			})
			.addCase(
				getTasksByIdsListUserIdSearchRequests.fulfilled,
				(
					state,
					action: PayloadAction<IGetTasksByIdsListUserIdSearchRequestsResponse | IError | unknown>,
				) => {
					if ((action?.payload as IGetTasksByIdsListUserIdSearchRequestsResponse)?.status === 200) {
						state.tasks.foundedTasks = (
						action?.payload as IGetTasksByIdsListUserIdSearchRequestsResponse
						).data;
					} else if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(
				getTasksByIdsListUserIdSearchRequests.rejected,
				(state, action: PayloadAction<unknown>) => {
					(state.error as unknown) = action.payload;
					state.isLoading = false;
				},
			)

			.addCase(updateSetOfTasks.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.tasks.updatedTasks = [];
			})
			.addCase(
				updateSetOfTasks.fulfilled,
				(state, action: PayloadAction<IUpdateSetOfTasksResponse | IError | unknown>) => {
					if ((action?.payload as IUpdateSetOfTasksResponse)?.status === 200) {
						state.tasks.updatedTasks = (action?.payload as IUpdateSetOfTasksResponse).data;
					} else if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(updateSetOfTasks.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			})

			.addCase(getTasksByBoardId.pending, (state) => {
				state.isLoading = true;
				state.error = '';
				state.tasks.foundedTasks = [];
			})
			.addCase(
				getTasksByBoardId.fulfilled,
				(state, action: PayloadAction<IGetTasksByBoardIdResponse | IError | unknown>) => {
					if ((action?.payload as IGetTasksByBoardIdResponse)?.status === 200) {
						state.tasks.foundedTasks = (action?.payload as IGetTasksByBoardIdResponse).data;
					} else if ((action?.payload as IError).data.message) {
						state.error = (action?.payload as IError).data.message;
					}
					state.isLoading = false;
				},
			)
			.addCase(getTasksByBoardId.rejected, (state, action: PayloadAction<unknown>) => {
				(state.error as unknown) = action.payload;
				state.isLoading = false;
			});

	},
});
