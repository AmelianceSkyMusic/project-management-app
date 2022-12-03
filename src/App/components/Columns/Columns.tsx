/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
	Box, Button, CircularProgress, IconButton, Typography,
} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

import { deleteBoardById, getBoardById } from '~api/boards';
import { getColumnsInBoard } from '~api/columns';
import { PopoverMenu } from '~components/PopoverMenu';
import { TaskList } from '~components/Tasks/TasksList';
import { BoardModal } from '~pages/Board/BoardModal';
import { IColumn } from '~types/api';

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
			await getColumnsInBoard(id).then((res) => setColumnList(res.data));
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
			<Grid2 container spacing={2}>
				{!!columnList && columnList.map((task) => (
					<Grid2 key={task._id}>
						<TaskList
							title={task.title}
							_id={task._id}
							boardId={task.boardId}
							order={task.order}
							getColumns={getColumns}
						/>
					</Grid2>
				))}
			</Grid2>
		</>
	);
}
