import { useState } from 'react';
import { useDrop } from 'react-dnd';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';

import { PopoverMenu } from '~components/PopoverMenu';
import { IColumn, ITask } from '~types/boardInterfaces';

import { tasksListDB } from './_tempBD/tasksList._temp';
import { Task } from './Task';

export function TaskList({ title, id }: IColumn) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [allTasks, setAllTasks] = useState<ITask[]>(tasksListDB);
	const [columnTasksList, setColumnTasksList] = useState<ITask[]>([
		...allTasks.filter((task) => task.columnId === id)]);
	const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		setAnchorEl(event.currentTarget);
	};
	const handleChangeClick = () => {
		// console.log('Change');
		setAnchorEl(null);
	};
	const handleDeleteClick = () => {
		// console.log('Delete');
		setAnchorEl(null);
	};
	const handleMenuClose = () => {
		setAnchorEl(null);
	};
	const handleAddClick = () => {
		// console.log('Add');
		setAnchorEl(null);
	};
	const [, drop] = useDrop({
		accept: 'task',
		drop: () => ({ id }),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	});
	const moveCardHandler = (dragIndex: number, hoverIndex: number) => {
		const dragTask = columnTasksList[dragIndex];
		if (dragTask) {
			setColumnTasksList((prevState) => {
				const copiedStateArray = [...prevState];
				const prevTask = copiedStateArray.splice(hoverIndex, 1, dragTask);
				copiedStateArray.splice(dragIndex, 1, prevTask[0]);
				console.log('move', copiedStateArray);
				return copiedStateArray;
			});
		}
	};
	const changeTaskColumn = (currentId: string, resColumnId: string) => {
		setAllTasks((prevState) => {
			const copiedStateArray = [...prevState].map((e) => ({
				...e,
				columnId: (e.taskId === currentId) ? resColumnId : e.columnId,
			}));
			console.log('change', copiedStateArray);
			return copiedStateArray;
		});
		setColumnTasksList((prevState) => {
			const copiedStateArray = [...prevState];
			const item = allTasks.find((e) => e.taskId === currentId);
			if (item?.columnId === resColumnId) {
				copiedStateArray.splice(copiedStateArray.indexOf(item), 1);
			}
			console.log('change copiedStateArray', copiedStateArray);
			return copiedStateArray;
		});
		// setColumnTasksList([...allTasks.filter((task) => task.columnId === id)]);
	};
	return (
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
				{columnTasksList.map((task, index) => (
					<Task
						key={task.taskId}
						taskId={task.taskId}
						columnId={task.columnId}
						title={task.title}
						description={task.description}
						// setTasksList={setTasksList}
						index={index}
						moveCardHandler={moveCardHandler}
						changeTaskColumn={changeTaskColumn}
					/>
				))}
				<IconButton aria-label="settings" className="material-symbols-rounded" onClick={handleAddClick}>
					add
				</IconButton>
			</CardContent>
		</Card>
	);
}
