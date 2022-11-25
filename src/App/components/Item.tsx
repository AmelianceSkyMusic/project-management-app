import { useRef } from 'react';
import { DropTargetMonitor, useDrag, useDrop } from 'react-dnd';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { XYCoord } from 'dnd-core';

import {
	ICollectedProps, IDragItem, IDropItem, IDropResult, ITasksProps,
} from '~types/boardInterfaces';

export function Item({
	id, currentColumnId, title, description, setItemsList, index, moveCardHandler,
}: ITasksProps) {
	const changeItemColumn = (currentIndex: number, columnId: string) => {
		setItemsList((prevState) => prevState.map((e, ind) => ({
			...e,
			columnId: ind === currentIndex ? e.columnId : columnId,
		})));
	};

	const ref = useRef<HTMLDivElement>(null);

	const [, drop] = useDrop<IDropItem>({
		accept: 'item',
		hover(item: IDropItem, monitor: DropTargetMonitor) {
			if (!ref.current) {
				return;
			}
			const dragIndex = item.index;
			const hoverIndex = index;
			// Don't replace items with themselves
			if (dragIndex === hoverIndex) {
				return;
			}
			// Determine rectangle on screen
			const hoverBoundingRect = ref.current?.getBoundingClientRect();
			// Get vertical middle
			const hoverMiddleY =	(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			// Determine mouse position
			const clientOffset = monitor.getClientOffset();
			// Get pixels to the top
			const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
			// Only perform the move when the mouse has crossed half of the items height
			// When dragging downwards, only move when the cursor is below 50%
			// When dragging upwards, only move when the cursor is above 50%
			// Dragging downwards
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}
			// Dragging upwards
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}
			// Time to actually perform the action
			moveCardHandler(dragIndex, hoverIndex);
			// Note: we're mutating the monitor item here!
			// Generally it's better to avoid mutations,
			// but it's good here for the sake of performance
			// to avoid expensive index searches.
			// eslint-disable-next-line no-param-reassign
			item.index = hoverIndex;
		},
	});

	const [{ isDragging }, drag] = useDrag<IDragItem, IDropResult, ICollectedProps>(() => ({
		type: 'item',
		item: {
			index,
		},
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult();

			if (dropResult) {
				const { columnId } = dropResult;
				if (columnId === currentColumnId) {
					changeItemColumn(item.index, columnId);
				}
			}
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	}));

	drag(drop(ref));
	return (
		<Card
			sx={{
				background: 'rgba(255, 255, 255, 0.3)', borderRadius: '32px', border: '1px solid #FFFFFF', padding: '4px 8px', opacity: isDragging ? '0.4' : '1',
			}}
			ref={ref}
		>
			<CardHeader title={title + id} />
			<CardContent>{description}</CardContent>
		</Card>
	);
}
