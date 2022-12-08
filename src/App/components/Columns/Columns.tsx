/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import { useNavigate, useParams } from 'react-router-dom';

import {
	Box, Button, CircularProgress, IconButton, Typography,
} from '@mui/material';

import { PopoverMenu } from '~components/PopoverMenu';
import { TaskList } from '~components/Tasks/TasksList';
import { BoardModal } from '~pages/Board/BoardModal';
import { deleteBoardById } from '~store/boards/actions/deleteBoardById';
import { getBoardById } from '~store/boards/actions/getBoardById';
import { getColumnsInBoard } from '~store/columns/actions/getColumnsInBoard';
import { updateSetOfColumns } from '~store/columns/actions/updateSetOfColumns';
import { useTypedDispatch } from '~store/hooks/useTypedDispatch';
import { useTypedSelector } from '~store/hooks/useTypedSelector';
import { IColumn, IColumnOrder } from '~types/api';

import { ColumnsModal } from './ColumnsModal';

export function Columns() {
	const dispatch = useTypedDispatch();
	const { isLoading, error, columns } = useTypedSelector((state) => state.columnsReducer);
	const { boards } = useTypedSelector((state) => state.boardsReducer);
	// const [columnList, setColumnList] = useState<IColumn[] | null>([]);
	const [boardTitle, setBoardTitle] = useState<string>('');
	// const [isLoadin, setIsLoading] = useState(true);

	const { id } = useParams<string>();
	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	const getColumns = () => {
		if (id) {
			dispatch(getBoardById(id));
			dispatch(getColumnsInBoard(id));
		}
		// setIsLoading(false);
	};
	useEffect(() => {
		getColumns();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const [isOpen, setIsOpen] = useState(false);
	const handleOpen = () => setIsOpen(true);
	const handleClose = () => {
		setIsOpen(false);
		// setIsLoading(true);
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
			dispatch(deleteBoardById(id));
		}
		// setIsLoading(true);
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

	const updateColumns = (list: IColumnOrder[]) => {
		dispatch(updateSetOfColumns(list));
		getColumns();
	};

	const moveColumnsHandler = (dragIndex: number, hoverIndex: number) => {
		// if (columnList) {
		const dragTask = columns.foundedColumns[dragIndex];
		if (dragTask) {
			const copyTasks = [...columns.foundedColumns];
			const prevTask = copyTasks.splice(hoverIndex, 1, dragTask);
			copyTasks.splice(dragIndex, 1, prevTask[0]);
			const changedList: IColumnOrder[] = copyTasks
				.map((task, index) => ({ ...task, order: index }))
				.map((task) => ({ _id: task._id, order: task.order }));
			updateColumns(changedList);
			// setIsLoading(true);
		}
		// }
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
				currentTitle={boards.foundedBoard.title}
				currentId={id || ''}
			/>
			<Typography variant="h3" component="h3" sx={{ fontSize: 24 }}>
				<IconButton aria-label="settings" className="material-symbols-rounded" onClick={goBack}>
					arrow_back
				</IconButton>
				Board
				{' '}
				{boards.foundedBoard.title}
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
			<ColumnsModal isOpen={isOpen} handleClose={handleClose} currentTitle="" currentId="" currentBoardId={id || ''} currentOrder={columns.foundedColumns?.length || 0} />
			<Box
				sx={{
					padding: '8px', display: 'flex', flexFlow: 'row nowrap', gap: '16px', justifyContent: 'flex-start', alignItems: 'flex-start', overflowX: 'auto', overflowY: 'hidden', height: '100%',
				}}
				ref={drop}
			>
				{columns.foundedColumns.map((task, index) => (
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
