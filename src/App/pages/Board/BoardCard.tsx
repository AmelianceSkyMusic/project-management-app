import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Link } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';

import { PopoverMenu } from '~components/PopoverMenu';
import { IBoardCardProps } from '~types/boardInterfaces';

import { BoardModalWindow } from './BoardModalWindow';

export function BoardCard({ title, id }: IBoardCardProps) {
	const [isOpen, setIsOpen] = useState(false);
	const handleClose = () => setIsOpen(false);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		setAnchorEl(event.currentTarget);
	};
	const handlePopoverMenuClick = (event: React.MouseEvent<HTMLDivElement>) => {
		event.preventDefault();
	};
	const handleChangeClick = () => {
		setIsOpen(true);
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
			<BoardModalWindow
				isOpen={isOpen}
				handleClose={handleClose}
				currentTitle={title}
				currentId={id}
			/>
			<Link
				component={NavLink}
				to={`/board/${id}`}
				underline="none"
			>
				<Card sx={{
					width: '300px', height: '150px', background: 'transparent', borderRadius: '32px', border: '1px solid black', padding: '4px 8px',
				}}
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
						onClick={(e) => handlePopoverMenuClick(e)}
					/>

				</Card>
			</Link>
		</>
	);
}
