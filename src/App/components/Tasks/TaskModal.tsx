import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import {
	Box, Button, InputLabel, Modal, TextField,
} from '@mui/material';

import { createTask, updateTaskById } from '~api/tasks';
import { ITaskParams, ITaskParamsUpdate } from '~types/api';
import { ITaskModalProps } from '~types/tasks';

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

export function TasksModal({
	isOpen, handleClose, currentTitle,
	currentId, currentBoardId, currentOrder, currentDescription, currentColumnId,
}: ITaskModalProps) {
	const { t } = useTranslation();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ITaskParams>({
		mode: 'onSubmit',
		defaultValues: {
			title: currentTitle === '' ? '' : currentTitle,
			description: currentDescription === '' ? '' : currentDescription,
		},
	});
	const registers = {
		title: register('title', {
			required: t('required') || '',
			minLength: { value: 3, message: t('titleMinLength') },
		}),
		description: register('description', {
			required: t('required') || '',
			minLength: { value: 10, message: t('descriptionMinLength') },
		}),
	};
	const onSubmit: SubmitHandler<ITaskParams> = async ({ title, description }: ITaskParams) => {

		if (currentTitle === '') {
			const body: ITaskParams = {
				title,
				order: currentOrder,
				description,
				userId: '6387bf68b335c21a49214342', // ---------------------User ID
				users: [
					'63872dd4b335c21a49214323', // -------------------------FIX users
				],
			};
			await createTask(body, currentBoardId, currentColumnId);
			handleClose();
		} else if (currentTitle !== '') {
			const body: ITaskParamsUpdate = {
				title,
				order: currentOrder,
				description,
				columnId: currentColumnId,
				userId: '6387bf68b335c21a49214342', // ---------------------User ID
				users: [
					'63872dd4b335c21a49214323', // -------------------------FIX users
				],
			};
			await updateTaskById(body, currentBoardId, currentColumnId, currentId);
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
						<InputLabel required htmlFor="task-title">
							{t('taskName')}
							:
						</InputLabel>
						<TextField
							{...registers.title}
							error={!!(errors && errors.title?.message)}
							helperText={errors.title?.message || ' '}
							id="task-title"
							placeholder={currentTitle === '' ? (t('taskName') || '') : currentTitle}
							defaultValue={currentTitle === '' ? '' : currentTitle}
						/>
					</Box>
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
						<InputLabel required htmlFor="board-description">
							{t('taskDescription')}
							:
						</InputLabel>
						<TextField
							{...registers.description}
							error={!!(errors && errors.description?.message)}
							helperText={errors.description?.message || ' '}
							id="board-description"
							placeholder={currentDescription === '' ? (t('taskDescription') || '') : currentDescription}
							defaultValue={currentDescription === '' ? '' : currentDescription}
						/>
					</Box>
					<Button
						type="submit"
						variant="contained"
						size="large"
						sx={{ width: { ss: '100%', sm: 'auto' }, order: { ss: 1, sm: 2 } }}
					>
						{currentTitle === '' ? t('create') : t('change')}
					</Button>
				</Box>
			</Box>
		</Modal>
	);
}
