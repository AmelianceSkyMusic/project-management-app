import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import {
	Box, Button, InputLabel, Modal, TextField,
} from '@mui/material';

import { createColumn } from '~store/columns/actions/createColumn';
import { updateColumnById } from '~store/columns/actions/updateColumnById';
import { useTypedDispatch } from '~store/hooks/useTypedDispatch';
import { IColumnParams } from '~types/api';
import { IColumnModalProps } from '~types/column';

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

export function ColumnsModal({
	isOpen, handleClose, currentTitle, currentId, currentBoardId, currentOrder,
}: IColumnModalProps) {
	const dispatch = useTypedDispatch();
	const { t } = useTranslation();
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
			required: t('required') || '',
			minLength: { value: 3, message: t('titleMinLength') },
		}),
	};
	const onSubmit: SubmitHandler<IColumnParams> = ({ title }: IColumnParams) => {
		const body: IColumnParams = {
			title,
			order: currentOrder,
		};
		if (currentTitle === '') {
			dispatch(createColumn({ body, boardId: currentBoardId })).then(() => handleClose());
		} else if (currentTitle !== '') {
			dispatch(updateColumnById({ body, boardId: currentBoardId, columnId: currentId }))
				.then(() => handleClose());
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
						<InputLabel required htmlFor="column-title">
							{t('columnName')}
							:
						</InputLabel>
						<TextField
							{...registers.title}
							error={!!(errors && errors.title?.message)}
							helperText={errors.title?.message || ' '}
							id="column-title"
							placeholder={currentTitle === '' ? (t('columnName') || '') : currentTitle}
							defaultValue={currentTitle === '' ? '' : currentTitle}
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
