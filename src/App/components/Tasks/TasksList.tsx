/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';

import { Box, CircularProgress } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';

import { deleteColumnById } from '~api/columns';
import {	getTasksInColumn, updateSetOfTasks } from '~api/tasks';
import { ColumnsModal } from '~components/Columns/ColumnsModal';
import { PopoverMenu } from '~components/PopoverMenu';
import { ITask, ITasksOrder } from '~types/api';
import { ITaskListProps } from '~types/boardInterfaces';

import { TaskCard } from './TaskCard';
import { TasksModal } from './TaskModal';

export function TaskList({
	title, _id, boardId, order, getColumns,
}: ITaskListProps) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [tasks, setTasks] = useState<ITask[] | null>([]);

	const [isLoading, setIsLoading] = useState(true);
	const getTasks = async () => {
		if (_id) {
			await getTasksInColumn(boardId, _id).then((resp) => {
				if (resp.data) setTasks(resp.data.sort((a, b) => a.order - b.order));
			});
		}
		setIsLoading(false);
	};
	useEffect(() => {
		getTasks();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const [isOpen, setIsOpen] = useState(false);
	const handleClose = () => {
		setIsOpen(false);
		setIsLoading(true);
		getColumns();
	};
	const [isTaskOpen, setIsTaskOpen] = useState(false);
	const handleTaskClose = () => {
		setIsTaskOpen(false);
		setIsLoading(true);
		getTasks();
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
		setIsLoading(true);
		await deleteColumnById(boardId, _id);
		getColumns();
		setAnchorEl(null);
	};
	const handleMenuClose = () => {
		setAnchorEl(null);
	};
	const handleAddClick = () => {
		setIsTaskOpen(true);
		setAnchorEl(null);
	};
	const [, drop] = useDrop({
		accept: 'task',
		drop: () => ({ _id }),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	});

	const updateTasks = async (list: ITasksOrder[]) => {
		await updateSetOfTasks(list);
		getTasks();
	};

	const moveCardHandler = async (dragIndex: number, hoverIndex: number) => {
		if (tasks) {
			const dragTask = tasks[dragIndex];
			if (dragTask) {
				const copyTasks = [...tasks];
				const prevTask = copyTasks.splice(hoverIndex, 1, dragTask);
				copyTasks.splice(dragIndex, 1, prevTask[0]);
				const changedList: ITasksOrder[] = copyTasks
					.map((task, index) => ({ ...task, order: index }))
					.map((task) => ({ _id: task._id, order: task.order, columnId: task.columnId }));
				updateTasks(changedList);
				setIsLoading(true);
			}
		}
	};

	return (
		<>
			{isLoading && (
				<Box sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					display: 'flex',
					background: 'transparent',
				}}
				>
					<CircularProgress size={100} thickness={4} />
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
				currentOrder={tasks?.length || 0}
				currentDescription=""
				currentColumnId={_id}
			/>
			<Card
				sx={{
					width: '300px', background: 'transparent', borderRadius: '32px', border: '1px solid black', padding: '4px 8px',
				}}
				ref={drop}
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
						['Change', handleChangeClick],
						['Delete', handleDeleteClick],
					]}
					open={!!anchorEl}
					onClose={handleMenuClose}
				/>
				<CardContent
					sx={{
						padding: '8px', display: 'flex', flexFlow: 'column nowrap', gap: '8px',
					}}
				>
					{!!tasks && tasks.map((task, index) => (
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
							setIsLoading={setIsLoading}
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
