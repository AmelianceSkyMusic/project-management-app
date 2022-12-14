export interface IBoardCardProps {
	title: string;
	id: string;
	getBoards: () => void;
}
export interface IBoardModalProps {
	isOpen: boolean;
	handleClose: () => void;
	currentTitle: string;
	currentId: string;
}
