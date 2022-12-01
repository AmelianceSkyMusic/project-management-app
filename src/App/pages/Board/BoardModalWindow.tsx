import { SubmitHandler, useForm } from 'react-hook-form';

import {
	Box, Button, InputLabel, Modal, TextField,
} from '@mui/material';

import { createBoard, updateBoardById } from '~api/boards';
import { IBoard } from '~types/api';
import { IBoardModalWindowProps } from '~types/boardInterfaces';

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

export function BoardModalWindow({
	isOpen, handleClose, currentTitle, currentId,
}: IBoardModalWindowProps) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IBoard>({
		mode: 'onSubmit',
		defaultValues: {
			title: '',
		},
	});
	const registers = {
		title: register('title', {
			required: 'Поле таке пусте! Введіть більше символів!',
			minLength: { value: 3, message: 'Мінімальна довжина 3 символи' },
		}),
	};
	const onSubmit: SubmitHandler<IBoard> = async ({ title }: IBoard) => {
		if (currentTitle === 'undefined') {
			const body: IBoard = {
				title,
				owner: '6387bf68b335c21a49214342', // ---------------------get User
				users: [
					'63872dd4b335c21a49214323', // -------------------------FIX users
				],
			};
			const resp = await createBoard(body);
			if (resp.status === 200) console.log(resp);
		}
		// else {
		// 	const body: IBoard = {
		// 		title: currentTitle,
		// 		owner: '6387bf68b335c21a49214342', // ---------------------get User
		// 		users: [
		// 			'63872dd4b335c21a49214323', // -------------------------FIX users
		// 		],
		// 	};
		// 	await updateBoardById(body, currentId);
		// }
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
							placeholder="Назва дошки"
							defaultValue={currentTitle}
						/>
					</Box>
					<Button
						type="submit"
						variant="contained"
						size="large"
						sx={{ width: { ss: '100%', sm: 'auto' }, order: { ss: 1, sm: 2 } }}
						onClick={handleClose}
					>
						{currentTitle === 'undefined' ? 'Створити' : 'Змінити'}
					</Button>
				</Box>
			</Box>
		</Modal>
	);
}
