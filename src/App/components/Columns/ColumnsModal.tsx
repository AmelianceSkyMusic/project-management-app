import { SubmitHandler, useForm } from 'react-hook-form';

import {
	Box, Button, InputLabel, Modal, TextField,
} from '@mui/material';

import { createColumn, updateColumnById } from '~api/columns';
import { IColumnParams } from '~types/api';
import { IColumnModalWindowProps } from '~types/boardInterfaces';

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

export function ColumnsModalWindow({
	isOpen, handleClose, currentTitle, currentId, currentBoardId, currentOrder,
}: IColumnModalWindowProps) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IColumnParams>({
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
	const onSubmit: SubmitHandler<IColumnParams> = async ({ title }: IColumnParams) => {
		const body: IColumnParams = {
			title,
			order: currentOrder,
		};
		if (currentTitle === '') {
			await createColumn(body, currentBoardId);
			handleClose();
		} else if (currentTitle !== '') {
			await updateColumnById(body, currentBoardId, currentId);
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
						<InputLabel required htmlFor="board-title">Назва колонки:</InputLabel>
						<TextField
							{...registers.title}
							error={!!(errors && errors.title?.message)}
							helperText={errors.title?.message || ' '}
							id="board-title"
							placeholder={currentTitle === '' ? 'Назва колонки' : currentTitle}
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
