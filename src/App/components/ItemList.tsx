import { useState } from 'react';
import { useDrop } from 'react-dnd';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';

import { PopoverMenu } from '~components/PopoverMenu';
import { IItemList, ITasksList } from '~types/boardInterfaces';

import { tasksList } from './_tempBD/tasksList._temp';
import { Item } from './Item';

export function ItemList({ title, id }: IItemList) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [itemsList, setItemsList] = useState<ITasksList[]>(tasksList);
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
	const [{ isOver }, drop] = useDrop({
		accept: 'item',
		drop: () => ({ name: title }),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
		}),
	});
	const moveCardHandler = (dragIndex: number, hoverIndex: number) => {
		const dragItem = itemsList[dragIndex];
		if (dragItem) {
			setItemsList((prevState) => {
				const copiedStateArray = [...prevState];

				// remove item by "hoverIndex" and put "dragItem" instead
				const prevItem = copiedStateArray.splice(hoverIndex, 1, dragItem);

				// remove item by "dragIndex" and put "prevItem" instead
				copiedStateArray.splice(dragIndex, 1, prevItem[0]);

				return copiedStateArray;
			});
		}
	};
	return (
		<Card
			sx={{
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
			<CardContent
				sx={{
					padding: '8px', display: 'flex', flexFlow: 'column nowrap', gap: '8px',
				}}
				ref={drop}

			>
				{itemsList.filter((item) => item.columnId === id).map((item, index) => (
					<Item
						key={item.id}
						id={item.id}
						currentColumnId={item.columnId}
						columnId={item.columnId}
						title={item.title}
						description={item.description}
						setItemsList={setItemsList}
						index={index}
						moveCardHandler={moveCardHandler}
					/>
				))}
				<IconButton aria-label="settings" className="material-symbols-rounded" onClick={handleAddClick}>
					add
				</IconButton>
			</CardContent>
		</Card>
	);
}
