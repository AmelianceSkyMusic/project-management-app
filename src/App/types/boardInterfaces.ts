import { Dispatch, SetStateAction } from 'react';

export interface IBoardCardProps {
	title: string;
	id: string;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
	getBoards: () => void;
}
export interface IBoardModalWindowProps {
	isOpen: boolean;
	handleClose: () => void;
	currentTitle: string;
	currentId: string;
}
export interface IColumnModalWindowProps {
	isOpen: boolean;
	handleClose: () => void;
	currentTitle: string;
	currentId: string;
	currentBoardId: string;
	currentOrder: number;

}
export interface ITaskListProps {
	title: string;
	id: string;
}
export interface ITask {
	taskId: string;
	columnId: string;
	title: string;
	description: string;
}
export interface ITaskProps extends ITask {
	index: number;
	moveCardHandler: (dragIndex: number, hoverIndex: number) => void;
	changeTaskColumn: (currentId: string, resColumnId: string) => void;
}

export interface IDropTask {
	index: number;
	columnId: string;
	taskId: string;
	type: string;
}
export interface IDropResult {
	id: string;
}

export interface IDragTask {
	taskId: string;
}

export interface ICollectedProps {
	isDragging: boolean;
}
