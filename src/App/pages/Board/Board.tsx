/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';

import { Box, CircularProgress, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Grid2 from '@mui/material/Unstable_Grid2';

// import { getBoardsByUserId } from '~api/boards';
import { BoardCard } from '~pages/Board/BoardCard';
import { getBoardsByUserId } from '~store/boards/actions/getBoardsByUserId';
import { useTypedDispatch } from '~store/hooks/useTypedDispatch';
import { useTypedSelector } from '~store/hooks/useTypedSelector';
import { getAllUsers } from '~store/users/actions/getAllUsers';

import { BoardModal } from './BoardModal';

export function Board() {
	const dispatch = useTypedDispatch();
	const { isLoading, boards } = useTypedSelector((state) => state.boardsReducer);
	const { auth } = useTypedSelector((state) => state.authReducer);

	const getBoards = () => {
		dispatch(getBoardsByUserId(auth.id));
		dispatch(getAllUsers());
	};
	useEffect(() => {
		getBoards();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [isOpen, setIsOpen] = useState(false);
	const handleOpen = () => setIsOpen(true);
	const handleClose = () => {
		setIsOpen(false);
		getBoards();
	};
	return (
		<>
			{isLoading && (
				<Box sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					display: 'flex',
					background: 'transparent',
					transform: 'translate(-50%, -50%)',
				}}
				>
					<CircularProgress size={48} thickness={4} />
				</Box>
			)}
			<Typography variant="h3" component="h3" sx={{ fontSize: 24 }}>Boards</Typography>
			<Button onClick={handleOpen}>Add board</Button>

			<BoardModal isOpen={isOpen} handleClose={handleClose} currentTitle="" currentId="" />
			<Grid2 container spacing={2}>
				{boards.foundedBoards.map((board) => (
					<Grid2 key={board._id}>
						<BoardCard
							title={board.title}
							id={board._id}
							key={board._id}
							getBoards={getBoards}
						/>
					</Grid2>
				))}
			</Grid2>
		</>
	);
}
