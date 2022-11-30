import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import Grid2 from '@mui/material/Unstable_Grid2';

import { boardColumnList } from '~components/_tempBD/boardList._temp';
import { boardArr } from '~components/_tempBD/boards._temp';
import { PopoverMenu } from '~components/PopoverMenu';
import { TaskList } from '~components/TasksList';

export function Columns() {
	const [columnList] = useState(boardColumnList);
	const { id } = useParams();
	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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
	const boardTitle = boardArr[boardArr.findIndex((el) => el.id === id)].title;
	return (
		<>
			<h2>
				<IconButton aria-label="settings" className="material-symbols-rounded" onClick={goBack}>
					arrow_back
				</IconButton>
				Board
				{' '}
				{boardTitle}
				<IconButton aria-label="settings" className="material-symbols-rounded" onClick={handleMenuClick}>
					more_vert
				</IconButton>
				<PopoverMenu
					anchorEl={anchorEl}
					menuItems={[
						['Change', handleChangeClick],
						['Delete', handleDeleteClick],
					]}
					open={!!anchorEl}
					onClose={handleMenuClose}
				/>
			</h2>
			<Grid2 container spacing={2}>
				{columnList.map((task) => (
					<Grid2 key={task.id}>
						<TaskList title={task.title} id={task.id} />
					</Grid2>
				))}
			</Grid2>
		</>
	);
}
