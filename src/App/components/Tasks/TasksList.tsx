/* eslint-disable no-underscore-dangle */
import { useEffect, useRef, useState } from 'react';
import { DropTargetMonitor, useDrag, useDrop } from 'react-dnd';
import { useTranslation } from 'react-i18next';

import { Box, CircularProgress } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import { XYCoord } from 'dnd-core';

import { ColumnsModal } from '~components/Columns/ColumnsModal';
import { PopoverMenu } from '~components/PopoverMenu';
import { deleteColumnById } from '~store/columns/actions/deleteColumnById';
import { useTypedDispatch } from '~store/hooks/useTypedDispatch';
import { useTypedSelector } from '~store/hooks/useTypedSelector';
import { getTasksInColumn } from '~store/tasks/actions/getTasksInColumn';
import { updateSetOfTasks } from '~store/tasks/actions/updateSetOfTasks';
import { ITasksOrder } from '~types/api';
import {
	ICollectedProps, IDragTask, IDropColumn, IDropResult,
} from '~types/DnD';
import { ITaskListProps } from '~types/tasks';

import { TaskCard } from './TaskCard';
import { TasksModal } from './TaskModal';

export function TaskList({
	title, _id, boardId, order, columnIndex, getColumns, moveColumnsHandler,
}: ITaskListProps) {
	const dispatch = useTypedDispatch();
	const { isLoading, tasks } = useTypedSelector((state) => state.tasksReducer);
	const { t } = useTranslation();

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const getTasks = (columnId: string) => {
		dispatch(getTasksInColumn({ boardId, columnId }));
	};

	useEffect(() => {
		getTasks(_id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [isOpen, setIsOpen] = useState(false);

	const handleClose = () => {
		setIsOpen(false);
		getColumns();
	};

	const [isTaskOpen, setIsTaskOpen] = useState(false);
	const handleTaskClose = () => {
		setIsTaskOpen(false);
		getTasks(_id);
	};

	const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		setAnchorEl(event.currentTarget);
	};
	const handleChangeClick = () => {
		setIsOpen(true);
		setAnchorEl(null);
	};

	const handleDeleteClick = async () => {
		dispatch(deleteColumnById({ boardId, columnId: _id })).then(() => getColumns());
		setAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const handleAddClick = () => {
		setIsTaskOpen(true);
		setAnchorEl(null);
	};

	const [, dropTask] = useDrop({
		accept: 'task',
		drop: () => ({ _id }),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	});

	const updateTasks = async (list: ITasksOrder[]) => {
		dispatch(updateSetOfTasks(list)).then(() => getColumns());
	};

	const moveCardHandler = (dragIndex: number, hoverIndex: number) => {
		if (tasks.inColumns[_id]) {
			const dragTask = tasks.inColumns[_id][dragIndex];
			if (dragTask) {
				const copyTasks = [...tasks.inColumns[_id]];
				const prevTask = copyTasks.splice(hoverIndex, 1, dragTask);
				copyTasks.splice(dragIndex, 1, prevTask[0]);
				const changedList: ITasksOrder[] = copyTasks
					.map((task, index) => ({ ...task, order: index }))
					.map((task) => ({ _id: task._id, order: task.order, columnId: task.columnId }));
				updateTasks(changedList);
			}
		}
	};

	const columnRef = useRef<HTMLDivElement>(null);

	const [, drop] = useDrop<IDropColumn>({
		accept: 'column',
		hover(item: IDropColumn, monitor: DropTargetMonitor) {
			if (!columnRef.current) {
				return;
			}
			const dragIndex = item.index;
			const hoverIndex = columnIndex;
			if (dragIndex === hoverIndex) {
				return;
			}
			const hoverBoundingRect = columnRef.current?.getBoundingClientRect();
			const hoverMiddleY =	(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			const clientOffset = monitor.getClientOffset();
			const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}
			moveColumnsHandler(dragIndex, hoverIndex);
			// eslint-disable-next-line no-param-reassign
			item.index = hoverIndex;
		},
	});

	const [{ isDragging }, drag] = useDrag<IDragTask, IDropResult, ICollectedProps>(() => ({
		type: 'column',
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	}));

	drag(drop(columnRef));

	return (
		<>
			{isLoading && (
				<Box sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					display: 'flex',
					background: 'transparent',
					transform: 'translate(-50%, -50%)',
				}}
				>
					<CircularProgress size={48} thickness={4} />
				</Box>
			)}
			<ColumnsModal
				isOpen={isOpen}
				handleClose={handleClose}
				currentTitle={title}
				currentId={_id}
				currentBoardId={boardId}
				currentOrder={order}
			/>
			<TasksModal
				isOpen={isTaskOpen}
				handleClose={handleTaskClose}
				currentTitle=""
				currentId=""
				currentBoardId={boardId}
				currentOrder={tasks.inColumns[_id]?.length || 0}
				currentDescription=""
				currentColumnId={_id}
			/>
			<Card
				sx={{
					width: '300px', background: 'transparent', borderRadius: '32px', border: '1px solid black', padding: '4px 8px', opacity: isDragging ? '0.4' : '1',
				}}
				ref={columnRef}
			>
				<CardHeader
					action={(
						<IconButton aria-label="settings" className="material-symbols-rounded" onClick={handleMenuClick}>
							more_vert
						</IconButton>
					)}
					title={title}
				/>
				<PopoverMenu
					anchorEl={anchorEl}
					menuItems={[
						[t('change'), handleChangeClick],
						[t('delete'), handleDeleteClick],
					]}
					open={!!anchorEl}
					onClose={handleMenuClose}
				/>
				<CardContent
					sx={{
						padding: '8px', display: 'flex', flexFlow: 'column nowrap', gap: '8px', overflowY: 'auto',
					}}
					ref={dropTask}
				>
					{tasks.inColumns[_id] && tasks.inColumns[_id].map((task, index) => (
						<TaskCard
							key={task._id}
							_id={task._id}
							columnId={task.columnId}
							boardId={task.boardId}
							title={task.title}
							description={task.description}
							order={task.order}
							userId={task.userId}
							users={task.users}
							index={index}
							moveCardHandler={moveCardHandler}
							getTasks={getTasks}
							getColumns={getColumns}
						/>
					))}
					<IconButton aria-label="settings" className="material-symbols-rounded" onClick={handleAddClick}>
						add
					</IconButton>
				</CardContent>
			</Card>
		</>
	);
}
