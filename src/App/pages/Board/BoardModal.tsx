/* eslint-disable no-underscore-dangle */
import { SubmitHandler, useForm } from 'react-hook-form';

import {
	Box, Button, InputLabel, Modal, TextField,
} from '@mui/material';

import { createBoard } from '~store/boards/actions/createBoard';
import { updateBoardById } from '~store/boards/actions/updateBoardById';
import { useTypedDispatch } from '~store/hooks/useTypedDispatch';
import { useTypedSelector } from '~store/hooks/useTypedSelector';
import { ICreateBoard } from '~types/api/boards/createBoard';
import { IBoardModalProps } from '~types/board';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	borderRadius: '30px',
	border: '1px solid #000',
	boxShadow: 24,
	p: 4,
};

export function BoardModal({
	isOpen, handleClose, currentTitle, currentId,
}: IBoardModalProps) {
	const dispatch = useTypedDispatch();
	const { auth } = useTypedSelector((state) => state.authReducer);
	const { users } = useTypedSelector((state) => state.usersReducer);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ICreateBoard>({
		mode: 'onSubmit',
		defaultValues: {
			title: currentTitle === '' ? '' : currentTitle,
		},
	});
	const registers = {
		title: register('title', {
			required: 'Поле таке пусте! Введіть більше символів!',
			minLength: { value: 3, message: 'Мінімальна довжина 3 символи' },
		}),
	};
	const onSubmit: SubmitHandler<ICreateBoard> = ({ title }: ICreateBoard) => {
		if (currentTitle === '') {
			const body: ICreateBoard = {
				title,
				owner: auth.id,
				users: users.all.map((user) => user._id),
				// [
				// 	auth.id,
				// ],
			};
			dispatch(createBoard(body)).then(() => handleClose());
		} else if (currentTitle !== '') {
			const body: ICreateBoard = {
				title,
				owner: auth.id,
				users: users.all.map((user) => user._id),
				// [
				// 	auth.id,
				// ],
			};
			dispatch(updateBoardById({ body, boardId: currentId })).then(() => handleClose());
		}
		reset();
	};
	return (
		<Modal
			open={isOpen}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Box
					component="form"
					onSubmit={handleSubmit(onSubmit)}
					sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
				>
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
						<InputLabel required htmlFor="board-title">Назва дошки:</InputLabel>
						<TextField
							{...registers.title}
							error={!!(errors && errors.title?.message)}
							helperText={errors.title?.message || ' '}
							id="board-title"
							placeholder={currentTitle === '' ? 'Назва дошки' : currentTitle}
							defaultValue={currentTitle === '' ? '' : currentTitle}
						/>
					</Box>
					<Button
						type="submit"
						variant="contained"
						size="large"
						sx={{ width: { ss: '100%', sm: 'auto' }, order: { ss: 1, sm: 2 } }}
					>
						{currentTitle === '' ? 'Створити' : 'Змінити'}
					</Button>
				</Box>
			</Box>
		</Modal>
	);
}
