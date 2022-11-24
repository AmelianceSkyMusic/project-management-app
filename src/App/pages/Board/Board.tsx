import Grid2 from '@mui/material/Unstable_Grid2';

import { BoardCard } from '~pages/Board/BoardCard';

const boardArr = [
	{
		id: 1,
		title: 'Board 1',
		description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',

	},
	{
		id: 2,
		title: 'Board 2',
		description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',

	},
	{
		id: 3,
		title: 'Board 3',
		description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',

	},
	{
		id: 4,
		title: 'Board 4',
		description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',

	},
	{
		id: 5,
		title: 'Board 5',
		description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',

	},
	{
		id: 6,
		title: 'Board 6',
		description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',

	},
	{
		id: 7,
		title: 'Board 7',
		description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',

	},
];
export function Board() {
	return (
		<>
			<h1>Board</h1>
			<Grid2 container spacing={2}>
				{boardArr.map((board) => (
					<Grid2 key={board.id}>
						<BoardCard title={board.title} description={board.description} key={board.id} />
					</Grid2>
				))}
			</Grid2>
		</>
	);
}
