/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';

import { Box, LinearProgress, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Grid2 from '@mui/material/Unstable_Grid2';

import { getBoardsByUserId } from '~api/boards';
import { BoardCard } from '~pages/Board/BoardCard';
import { IBoard } from '~types/api';

import { BoardModalWindow } from './BoardModalWindow';

export function Board() {
	const [boards, setBoards] = useState<IBoard[] | null>([]);
	const [isLoading, setIsLoading] = useState(true);
	const getBoards = async () => {
		const userId = '6387bf68b335c21a49214342'; // --------------------------- User Id
		await getBoardsByUserId([userId]).then((res) => setBoards(res.data));
		setIsLoading(false);
	};
	useEffect(() => {
		getBoards();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const [isOpen, setIsOpen] = useState(false);
	const handleOpen = () => setIsOpen(true);
	const handleClose = () => {
		setIsOpen(false);
		setIsLoading(true);
		getBoards();
	};
	return (
		<>
			<Typography variant="h3" component="h3" sx={{ fontSize: 24 }}>Boards</Typography>
			<Button onClick={handleOpen}>Add board</Button>
			{isLoading && (
				<Box sx={{ width: '100%' }}>
					<LinearProgress />
				</Box>
			)}
			<BoardModalWindow isOpen={isOpen} handleClose={handleClose} currentTitle="" currentId="" />
			<Grid2 container spacing={2}>
				{!!boards && boards.map((board) => (
					<Grid2 key={board._id}>
						<BoardCard
							title={board.title}
							id={board._id}
							key={board._id}
							setIsLoading={setIsLoading}
							getBoards={getBoards}
						/>
					</Grid2>
				))}
			</Grid2>
		</>
	);
}
