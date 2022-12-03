/* eslint-disable no-underscore-dangle */
import { useRef, useState } from 'react';
import { DropTargetMonitor, useDrag, useDrop } from 'react-dnd';

import {
	Card, CardContent, CardHeader, IconButton,
} from '@mui/material';
import { XYCoord } from 'dnd-core';

import { deleteTaskById, updateTaskById } from '~api/tasks';
import { PopoverMenu } from '~components/PopoverMenu';
import { ITaskParamsUpdate } from '~types/api';
import {
	ICollectedProps, IDragTask, IDropResult, IDropTask, ITaskProps,
} from '~types/boardInterfaces';

import { TasksModal } from './TaskModal';

export function TaskCard({
	_id, title, description, order, boardId,
	columnId, index, moveCardHandler, getTasks, getColumns, setIsLoading,
}: ITaskProps) {
	const [isOpen, setIsOpen] = useState(false);
	const handleClose = () => {
		setIsOpen(false);
		setIsLoading(true);
		getTasks();
	};

	const ref = useRef<HTMLDivElement>(null);
	const changeTaskColumn = async (currentId: string, resColumnId: string) => {
		const body: ITaskParamsUpdate = {
			title,
			order,
			description,
			columnId: resColumnId,
			userId: '6387bf68b335c21a49214342', // ---------------------User ID
			users: [
				'63872dd4b335c21a49214323', // -------------------------FIX users
			],
		};
		await updateTaskById(body, boardId, resColumnId, currentId);
		setIsLoading(true);
		getColumns();
		getTasks();
	};
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
			id: _id,
		},
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult();
			if (dropResult) {
				changeTaskColumn(item.id, dropResult._id);
			}
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	}));

	drag(drop(ref));
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleChangeClick = () => {
		setAnchorEl(null);
		setIsOpen(true);
	};
	const handleDeleteClick = async () => {
		await deleteTaskById(boardId, columnId, _id);
		setAnchorEl(null);
		setIsLoading(true);
		getTasks();
	};
	const handleMenuClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			<TasksModal
				isOpen={isOpen}
				handleClose={handleClose}
				currentTitle={title}
				currentId={_id}
				currentBoardId={boardId}
				currentOrder={order}
				currentDescription={description}
				currentColumnId={columnId}
			/>
			<Card
				sx={{
					height: '120px', background: 'rgba(255, 255, 255, 0.3)', borderRadius: '32px', border: '1px solid #FFFFFF', padding: '8px', opacity: isDragging ? '0.4' : '1',
				}}
				ref={ref}
			>
				<CardHeader
					title={`${title}`}
					sx={{ padding: '8px', fontSize: 18 }}
					disableTypography
					action={(
						<IconButton aria-label="settings" className="material-symbols-rounded" onClick={handleMenuClick}>
							more_vert
						</IconButton>
					)}
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
				<CardContent sx={{ height: '100px', padding: '8px', fontSize: 14 }}>{description}</CardContent>
			</Card>
		</>
	);
}
