import { Dispatch, SetStateAction } from 'react';

import { IColumn, ITask } from '~types/api';

export interface ITaskProps extends ITask {
	index: number;
	moveCardHandler: (dragIndex: number, hoverIndex: number) => void;
	getTasks: (id: string) => void;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
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
