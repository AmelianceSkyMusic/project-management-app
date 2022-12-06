import { SubmitHandler, useForm } from 'react-hook-form';

import {
	Box, Button, InputLabel, Modal, TextField,
} from '@mui/material';

import { createBoard, updateBoardById } from '~api/boards';
import { IBoardParams } from '~types/api';
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
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IBoardParams>({
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
	const onSubmit: SubmitHandler<IBoardParams> = async ({ title }: IBoardParams) => {
		if (currentTitle === '') {
			const body: IBoardParams = {
				title,
				owner: '6387bf68b335c21a49214342', // ---------------------User ID
				users: [
					'63872dd4b335c21a49214323', // -------------------------FIX users
				],
			};
			await createBoard(body);
			handleClose();
		} else if (currentTitle !== '') {
			const body: IBoardParams = {
				title,
				owner: '6387bf68b335c21a49214342', // ---------------------get User
				users: [
					'63872dd4b335c21a49214323', // -------------------------FIX users
				],
			};
			await updateBoardById(body, currentId);
			handleClose();
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
