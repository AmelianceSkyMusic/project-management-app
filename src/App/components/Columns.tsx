/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
	Box, IconButton, LinearProgress, Typography,
} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

import { deleteBoardById, getBoardById } from '~api/boards';
import { getColumnsInBoard } from '~api/columns';
import { PopoverMenu } from '~components/PopoverMenu';
import { TaskList } from '~components/TasksList';
import { BoardModalWindow } from '~pages/Board/BoardModalWindow';
import { IColumn } from '~types/api';

export function Columns() {
	const [columnList, setColumnList] = useState<IColumn[] | null>([]);
	const [boardTitle, setBoardTitle] = useState<string>('');
	const [isLoading, setIsLoading] = useState(true);
	const [isOpen, setIsOpen] = useState(false);
	const handleClose = () => setIsOpen(false);
	const { id } = useParams<string>();
	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	const getApi = async () => {
		if (id) {
			await getBoardById(id).then((resp) => {
				if (resp.data) setBoardTitle(resp.data.title);
			});
			await getColumnsInBoard(id).then((res) => setColumnList(res.data));
		}
		setIsLoading(false);
	};
	useEffect(() => {
		getApi();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
		setAnchorEl(null);
	};
	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<BoardModalWindow
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
			{isLoading && (
				<Box sx={{ width: '100%' }}>
					<LinearProgress />
				</Box>
			)}
			<Grid2 container spacing={2}>
				{!!columnList && columnList.map((task) => (
					<Grid2 key={task._id}>
						<TaskList title={task.title} id={task._id} />
					</Grid2>
				))}
			</Grid2>
		</>
	);
}
