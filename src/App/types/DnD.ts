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
