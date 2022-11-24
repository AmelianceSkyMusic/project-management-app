import { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';

import { PopoverMenu } from '~components/PopoverMenu';

interface ITasksList {
	taskId: number;
	taskTitle: string;
	taskBody: string;
}
interface IItemList {
	listTitle: string;
	list: ITasksList[];
}
export function ItemList({ listTitle, list }: IItemList) {
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
				title={listTitle}
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
					<Card
						key={item.taskId}
						sx={{
							background: 'rgba(255, 255, 255, 0.3)', borderRadius: '32px', border: '1px solid #FFFFFF', padding: '4px 8px',
						}}
					>
						<CardHeader title={item.taskTitle} />
						<CardContent>{item.taskBody}</CardContent>
					</Card>
				))}
				<IconButton aria-label="settings" className="material-symbols-rounded" onClick={handleAddClick}>
					add
				</IconButton>
			</CardContent>
		</Card>
	);
}
