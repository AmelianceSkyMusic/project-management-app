import { useRef } from 'react';
import { DropTargetMonitor, useDrag, useDrop } from 'react-dnd';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { XYCoord } from 'dnd-core';

import {
	ICollectedProps, IDragTask, IDropResult, IDropTask, ITaskProps,
} from '~types/boardInterfaces';

export function Task({
	taskId, title, description, index, moveCardHandler, changeTaskColumn,
}: ITaskProps) {

	const ref = useRef<HTMLDivElement>(null);

	const [, drop] = useDrop<IDropTask>({
		accept: 'task',
		hover(item: IDropTask, monitor: DropTargetMonitor) {
			if (!ref.current) {
				return;
			}
			const dragIndex = item.index;
			const hoverIndex = index;
			if (dragIndex === hoverIndex) {
				return;
			}
			const hoverBoundingRect = ref.current?.getBoundingClientRect();
			const hoverMiddleY =	(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			const clientOffset = monitor.getClientOffset();
			const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}
			moveCardHandler(dragIndex, hoverIndex);
			// eslint-disable-next-line no-param-reassign
			item.index = hoverIndex;
		},
	});

	const [{ isDragging }, drag] = useDrag<IDragTask, IDropResult, ICollectedProps>(() => ({
		type: 'task',
		item: {
			taskId,
		},
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult();
			if (dropResult) {
				// console.log('task ', item, 'drop id', dropResult.id);
				changeTaskColumn(item.taskId, dropResult.id);
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
				height: '120px', background: 'rgba(255, 255, 255, 0.3)', borderRadius: '32px', border: '1px solid #FFFFFF', padding: '8px', opacity: isDragging ? '0.4' : '1',
			}}
			ref={ref}
		>
			<CardHeader title={`${taskId} ${title}`} sx={{ padding: '8px', fontSize: 18 }} disableTypography />
			<CardContent sx={{ height: '100px', padding: '8px', fontSize: 14 }}>{description}</CardContent>
		</Card>
	);
}
