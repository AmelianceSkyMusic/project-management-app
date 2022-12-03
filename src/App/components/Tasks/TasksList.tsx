/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';

import { Box, CircularProgress } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';

import { deleteColumnById } from '~api/columns';
import { getTasksInColumn } from '~api/tasks';
import { ColumnsModal } from '~components/Columns/ColumnsModal';
import { PopoverMenu } from '~components/PopoverMenu';
import { ITask } from '~types/api';
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
			await getTasksInColumn(boardId, _id).then((resp) => setTasks(resp.data));
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
		getColumns();
	};
	const [isTaskOpen, setIsTaskOpen] = useState(false);
	const handleTaskClose = () => {
		setIsTaskOpen(false);
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
		await deleteColumnById(boardId, _id);
		setAnchorEl(null);
	};
	const handleMenuClose = () => {
		setAnchorEl(null);
	};
	const handleAddClick = () => {
		setIsTaskOpen(true);
		setAnchorEl(null);
	};
	// const [, drop] = useDrop({
	// 	accept: 'task',
	// 	drop: () => ({ id }),
	// 	collect: (monitor) => ({
	// 		isOver: monitor.isOver(),
	// 		canDrop: monitor.canDrop(),
	// 	}),
	// });
	const moveCardHandler = (dragIndex: number, hoverIndex: number) => {
	// 	const dragTask = columnTasksList[dragIndex];
	// 	if (dragTask) {
	// 		setColumnTasksList((prevState) => {
	// 			const copiedStateArray = [...prevState];
	// 			const prevTask = copiedStateArray.splice(hoverIndex, 1, dragTask);
	// 			copiedStateArray.splice(dragIndex, 1, prevTask[0]);
	// 			console.log('move', copiedStateArray);
	// 			return copiedStateArray;
	// 		});
	// 	}
	};
	const changeTaskColumn = (currentId: string, resColumnId: string) => {
	// 	setAllTasks((prevState) => {
	// 		const copiedStateArray = [...prevState].map((e) => ({
	// 			...e,
	// 			columnId: (e.taskId === currentId) ? resColumnId : e.columnId,
	// 		}));
	// 		console.log('change', copiedStateArray);
	// 		return copiedStateArray;
	// 	});
	// 	setColumnTasksList((prevState) => {
	// 		const copiedStateArray = [...prevState];
	// 		const item = allTasks.find((e) => e.taskId === currentId);
	// 		if (item?.columnId === resColumnId) {
	// 			copiedStateArray.splice(copiedStateArray.indexOf(item), 1);
	// 		}
	// 		console.log('change copiedStateArray', copiedStateArray);
	// 		return copiedStateArray;
	// 	});
		// setColumnTasksList([...allTasks.filter((task) => task.columnId === id)]);
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
				/* ref={drop} */
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
							// setTasksList={setTasksList}
							index={index}
							moveCardHandler={moveCardHandler}
							changeTaskColumn={changeTaskColumn}
							getTasks={getTasks}
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
