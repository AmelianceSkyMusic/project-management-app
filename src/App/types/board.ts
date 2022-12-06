import { Dispatch, SetStateAction } from 'react';

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
