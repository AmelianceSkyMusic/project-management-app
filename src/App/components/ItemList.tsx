import { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';

import { PopoverMenu } from '~components/PopoverMenu';
import { IItemList } from '~types/boardInterfaces';

import { Item } from './Item';

export function ItemList({ title, list }: IItemList) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
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

	return (
		<Card sx={{
			width: '300px', background: 'transparent', borderRadius: '32px', border: '1px solid black', padding: '4px 8px',
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
			/>
			<CardContent sx={{
				padding: '8px', display: 'flex', flexFlow: 'column nowrap', gap: '8px',
			}}
			>
				{list.map((item) => (
					<Item key={item.id} id={item.id} title={item.title} description={item.description} />
				))}
				<IconButton aria-label="settings" className="material-symbols-rounded" onClick={handleAddClick}>
					add
				</IconButton>
			</CardContent>
		</Card>
	);
}
