import { Dispatch, SetStateAction } from 'react';

import { IColumn, ITask } from '~types/api';

export interface IBoardCardProps {
	title: string;
	id: string;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
	getBoards: () => void;
}
export interface IBoardModalProps {
	isOpen: boolean;
	handleClose: () => void;
	currentTitle: string;
	currentId: string;
}
export interface IColumnModalProps {
	isOpen: boolean;
	handleClose: () => void;
	currentTitle: string;
	currentId: string;
	currentBoardId: string;
	currentOrder: number;
}
export interface ITaskModalProps {
	isOpen: boolean;
	handleClose: () => void;
	currentTitle: string;
	currentId: string;
	currentBoardId: string;
	currentColumnId: string;
	currentOrder: number;
	currentDescription: string;
}
export interface ITaskListProps extends IColumn {
	getColumns: () => void;
}
export interface ITaskProps extends ITask {
	index: number;
	moveCardHandler: (dragIndex: number, hoverIndex: number) => void;
	changeTaskColumn: (currentId: string, resColumnId: string) => void;
	getTasks: () => void;
}

export interface IDropTask {
	index: number;
	columnId: string;
	id: string;
	type: string;
}
export interface IDropResult {
	id: string;
}

export interface IDragTask {
	id: string;
}

export interface ICollectedProps {
	isDragging: boolean;
}
