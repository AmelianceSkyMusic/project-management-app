import { Dispatch, SetStateAction } from 'react';

export interface IBoardCardProps {
	title: string;
	description: string;
 }
export interface IItemList {
	title: string;
	id: string;
}
export interface ITasksList {
	id: string;
	columnId: string;
	title: string;
	description: string;
}
export interface ITasksProps extends ITasksList {
	index: number;
	currentColumnId: string;
	setItemsList: Dispatch<SetStateAction<ITasksList[]>>;
	moveCardHandler: (dragIndex: number, hoverIndex: number) => void;
}
export interface IDropItem {
	index: number;
	columnId: string;
	// currentColumnId: string;
	type: string;
}
export interface IDropResult {
	columnId: string;
}

export interface IDragItem {
	index: number;
}

export interface ICollectedProps {
	isDragging: boolean;
}
