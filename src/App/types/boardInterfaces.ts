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
	columnIndex: number;
	getColumns: () => void;
	moveColumnsHandler: (dragIndex: number, hoverIndex: number) => void;
}
export interface ITaskProps extends ITask {
	index: number;
	moveCardHandler: (dragIndex: number, hoverIndex: number) => void;
	getTasks: (id: string) => void;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface IDropColumn {
	index: number;
	id: string;
	type: string;
}
export interface IDropTask extends IDropColumn {
	columnId: string;
}
export interface IDropResult {
	_id: string;
}

export interface IDragTask {
	id: string;
}

export interface ICollectedProps {
	isDragging: boolean;
}
