/* eslint-disable no-underscore-dangle */
import { useRef, useState } from 'react';
import { DropTargetMonitor, useDrag, useDrop } from 'react-dnd';

import { ReactComponent as More } from '@material-symbols/svg-400/rounded/more_vert.svg';
import {
	Card, CardContent, CardHeader, IconButton,
} from '@mui/material';
import { XYCoord } from 'dnd-core';

import { PopoverMenu } from '~components/PopoverMenu';
import { Symbol } from '~components/Symbol';
import { useTypedDispatch } from '~store/hooks/useTypedDispatch';
import { useTypedSelector } from '~store/hooks/useTypedSelector';
import { deleteTaskById } from '~store/tasks/actions/deleteTaskById';
import { updateTaskById } from '~store/tasks/actions/updateTaskById';
import { ITaskParamsUpdate } from '~types/api';
import {
	ICollectedProps, IDragTask, IDropResult, IDropTask,
} from '~types/DnD';
import { ITaskProps } from '~types/tasks';

import { TasksModal } from './TaskModal';

export function TaskCard({
	_id, title, description, order, boardId,
	columnId, index, moveCardHandler, getTasks, getColumns,
}: ITaskProps) {
	const dispatch = useTypedDispatch();
	const { auth } = useTypedSelector((state) => state.authReducer);

	const [isOpen, setIsOpen] = useState(false);
	const handleClose = () => {
		setIsOpen(false);
		getTasks(columnId);
	};

	const taskRef = useRef<HTMLDivElement>(null);
	const changeTaskColumn = (currentId: string, resColumnId: string) => {
		const body: ITaskParamsUpdate = {
			title,
			order,
			description,
			columnId: resColumnId,
			userId: auth.id,
			users: [
				auth.id,
			],
		};
		dispatch(updateTaskById({
			body, boardId, columnId: resColumnId, taskId: currentId,
		})).then(() => getColumns());
	};
	const [, dropTask] = useDrop<IDropTask>({
		accept: 'task',
		hover(item: IDropTask, monitor: DropTargetMonitor) {
			if (!taskRef.current) {
				return;
			}
			const dragIndex = item.index;
			const hoverIndex = index;
			if (dragIndex === hoverIndex) {
				return;
			}
			const hoverBoundingRect = taskRef.current?.getBoundingClientRect();
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

	drag(dropTask(taskRef));
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleChangeClick = () => {
		setAnchorEl(null);
		setIsOpen(true);
	};
	const handleDeleteClick = () => {
		dispatch(deleteTaskById({ boardId, columnId, taskId: _id })).then(() => getTasks(columnId));
		setAnchorEl(null);
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
				ref={taskRef}
			>
				<CardHeader
					title={`${title}`}
					sx={{ padding: '8px', fontSize: 18 }}
					disableTypography
					action={(
						<IconButton className="material-symbols-rounded" onClick={handleMenuClick}>
							<Symbol>
								<More />
							</Symbol>
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
