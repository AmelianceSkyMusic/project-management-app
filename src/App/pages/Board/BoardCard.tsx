import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { Link } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';

import { deleteBoardById } from '~api/boards';
import { PopoverMenu } from '~components/PopoverMenu';
import { IBoardCardProps } from '~types/board';

import { BoardModal } from './BoardModal';

export function BoardCard({
	title, id, setIsLoading, getBoards,
}: IBoardCardProps) {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const handleClose = () => {
		setIsOpen(false);
		setIsLoading(true);
		getBoards();
	};
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
	const handleDeleteClick = async () => {
		await deleteBoardById(id);
		setIsLoading(true);
		getBoards();
		setAnchorEl(null);
	};
	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<BoardModal
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
							[t('change'), handleChangeClick],
							[t('delete'), handleDeleteClick],
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
