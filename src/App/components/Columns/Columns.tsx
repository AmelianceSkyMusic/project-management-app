/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import { useNavigate, useParams } from 'react-router-dom';

import {
	Box, Button, CircularProgress, IconButton, Typography,
} from '@mui/material';

import { deleteBoardById, getBoardById } from '~api/boards';
import { getColumnsInBoard, updateSetOfColumns } from '~api/columns';
import { PopoverMenu } from '~components/PopoverMenu';
import { TaskList } from '~components/Tasks/TasksList';
import { BoardModal } from '~pages/Board/BoardModal';
import { IColumn, IColumnOrder } from '~types/api';

import { ColumnsModal } from './ColumnsModal';

export function Columns() {
	const [columnList, setColumnList] = useState<IColumn[] | null>([]);
	const [boardTitle, setBoardTitle] = useState<string>('');
	const [isLoading, setIsLoading] = useState(true);

	const { id } = useParams<string>();
	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	const getColumns = async () => {
		if (id) {
			await getBoardById(id).then((resp) => {
				if (resp.data) setBoardTitle(resp.data.title);
			});
			await getColumnsInBoard(id).then((res) => {
				if (res.data) setColumnList(res.data.sort((a, b) => a.order - b.order));
			});
		}
		setIsLoading(false);
	};
	useEffect(() => {
		getColumns();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const [isOpen, setIsOpen] = useState(false);
	const handleOpen = () => setIsOpen(true);
	const handleClose = () => {
		setIsOpen(false);
		setIsLoading(true);
		getColumns();
	};
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleChangeClick = () => {
		setIsOpen(true);
		setAnchorEl(null);
	};
	const handleDeleteClick = async () => {
		if (id) {
			await deleteBoardById(id);
		}
		setIsLoading(true);
		goBack();
		setAnchorEl(null);
	};
	const handleMenuClose = () => {
		setAnchorEl(null);
	};
	const [, drop] = useDrop({
		accept: 'column',
		collect: (monitor) => ({
			isOver: monitor.isOver(),
		}),
	});

	const updateColumns = async (list: IColumnOrder[]) => {
		const resp = await updateSetOfColumns(list);
		console.log(resp);
		getColumns();
	};

	const moveColumnsHandler = async (dragIndex: number, hoverIndex: number) => {
		if (columnList) {
			const dragTask = columnList[dragIndex];
			if (dragTask) {
				const copyTasks = [...columnList];
				const prevTask = copyTasks.splice(hoverIndex, 1, dragTask);
				copyTasks.splice(dragIndex, 1, prevTask[0]);
				const changedList: IColumnOrder[] = copyTasks
					.map((task, index) => ({ ...task, order: index }))
					.map((task) => ({ _id: task._id, order: task.order }));
				updateColumns(changedList);
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
			<BoardModal
				isOpen={isOpen}
				handleClose={handleClose}
				currentTitle={boardTitle}
				currentId={id || ''}
			/>
			<Typography variant="h3" component="h3" sx={{ fontSize: 24 }}>
				<IconButton aria-label="settings" className="material-symbols-rounded" onClick={goBack}>
					arrow_back
				</IconButton>
				Board
				{' '}
				{boardTitle}
				<IconButton aria-label="settings" className="material-symbols-rounded" onClick={handleMenuClick}>
					more_vert
				</IconButton>
			</Typography>
			<PopoverMenu
				anchorEl={anchorEl}
				menuItems={[
					['Change', handleChangeClick],
					['Delete', handleDeleteClick],
				]}
				open={!!anchorEl}
				onClose={handleMenuClose}
			/>
			<Button onClick={handleOpen}>Add column</Button>
			<ColumnsModal isOpen={isOpen} handleClose={handleClose} currentTitle="" currentId="" currentBoardId={id || ''} currentOrder={columnList?.length || 0} />
			<Box
				sx={{
					padding: '8px', display: 'flex', flexFlow: 'row nowrap', gap: '16px', justifyContent: 'flex-start', alignItems: 'flex-start',
				}}
				ref={drop}
			>
				{!!columnList && columnList.map((task, index) => (
					<TaskList
						key={task._id}
						title={task.title}
						_id={task._id}
						boardId={task.boardId}
						order={task.order}
						getColumns={getColumns}
						moveColumnsHandler={moveColumnsHandler}
						columnIndex={index}
					/>
				))}
			</Box>
		</>
	);
}
