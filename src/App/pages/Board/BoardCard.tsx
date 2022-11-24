import { useState } from 'react';

import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';

import { PopoverMenu } from '~components/PopoverMenu';

interface IBoardCardProps {
  title: string;
  description: string;
}
export function BoardCard({ title, description }: IBoardCardProps) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		setAnchorEl(event.currentTarget);
	};
	const handlePopoverMenuClick = (event: React.MouseEvent<HTMLDivElement>) => {
		event.preventDefault();
	};
	const handleChangeClick = () => {
		console.log('Change');
		setAnchorEl(null);
	};
	const handleDeleteClick = () => {
		console.log('Delete');
		setAnchorEl(null);
	};
	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	return (
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
			<CardContent sx={{ padding: '8px', height: '100px' }}>
				<Typography variant="body2">{description}</Typography>
			</CardContent>
		</Card>
	);
}
