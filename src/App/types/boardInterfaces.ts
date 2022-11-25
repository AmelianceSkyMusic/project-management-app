export interface IBoardCardProps {
	title: string;
	description: string;
 }
export interface ITasksList {
	id: string;
	title: string;
	description: string;
}
export interface IItemList {
	title: string;
	list: ITasksList[];
}
