import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './auth/authSlice';
import { boardsSlice } from './boards/boardsSlice';
import { columnsSlice } from './columns/columnsSlice';
import { pointsSlice } from './points/pointsSlice';
import { tasksSlice } from './tasks/tasksSlice';
import { usersSlice } from './users/usersSlice';

export const store = configureStore({
	reducer: {
		authReducer: authSlice.reducer,
		usersReducer: usersSlice.reducer,
		boardsReducer: boardsSlice.reducer,
		columnsReducer: columnsSlice.reducer,
		tasksReducer: tasksSlice.reducer,
		pointsReducer: pointsSlice.reducer,
	},
});
