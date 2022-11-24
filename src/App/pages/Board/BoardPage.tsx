import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import Grid2 from '@mui/material/Unstable_Grid2';

import { boardList } from '~components/_tempBD/boardList._temp';
import { ItemList } from '~components/ItemList';
import { PopoverMenu } from '~components/PopoverMenu';

export function BoardPage() {
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
	return (
		<>
			<h2>
				<IconButton aria-label="settings" className="material-symbols-rounded" onClick={goBack}>
					arrow_back
				</IconButton>
				Board
				{' '}
				{id}
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
				{boardList.map((item) => (
					<Grid2 key={item.listId}>
						<ItemList listTitle={item.listTitle} list={item.list} />
					</Grid2>
				))}
			</Grid2>
		</>
	);
}
