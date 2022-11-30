import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Link } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

import { boardArr } from '~components/_tempBD/boards._temp';
import { BoardCard } from '~pages/Board/BoardCard';

export function Board() {
	const [boards] = useState(boardArr);
	return (
		<>
			<h1>Board</h1>
			<Grid2 container spacing={2}>
				{boards.map((board) => (
					<Grid2 key={board.id}>
						<Link
							component={NavLink}
							to={`/board/${board.id}`}
							underline="none"
						>
							<BoardCard title={board.title} description={board.description} key={board.id} />
						</Link>
					</Grid2>
				))}
			</Grid2>
		</>
	);
}
