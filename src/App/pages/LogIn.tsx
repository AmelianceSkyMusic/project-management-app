import { SubmitHandler, useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

import {
	Box, Button,
	Grid, InputLabel,
	Link,
	TextField, Typography,
} from '@mui/material';

import asm from '~/asmlib/asm-scripts';

interface ILoginInputs {
	email: string;
	password: string;
}

export function LogIn() {

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ILoginInputs>({
		mode: 'onSubmit',
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const isValidFixed = asm.isObjectEmpty(errors);//* fix isValid default has false

	const registers = {
		email: register('email', {
			required: 'Поле таке пусте! Введіть більше символів!',
			pattern: { value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i, message: 'Невірно введена адреса електронної пошти!' },
		}),
		password: register('password', {
			required: 'Поле таке пусте! Введіть більше символів!',
			pattern: { value: /^[0-9]+$/i, message: 'Будь ласка, використовуйте тільки цифри!' },
			minLength: { value: 12, message: 'Мінімальна довжина пароля 12 символів' },
		}),
	};

	const onSubmit: SubmitHandler<ILoginInputs> = ({ email, password }: ILoginInputs) => {
		console.log(email, password);
		reset();
	};

	return (
		<Grid
			container
			component="section"
			spacing={{ ss: 0, lg: 2 }}
			sx={{
				height: 'calc(100vh - 64px)', display: 'flex',
			}}
		>
			<Grid ss={1} item sx={{ display: { ss: 'none', lg: 'block' } }} />
			<Grid
				ss={12}
				lg={7}
				xl={6}
				sl={5}
				item
				sx={{
					display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center',
				}}
			>
				<Typography variant="h3">Вхід</Typography>

				<Box
					component="form"
					onSubmit={handleSubmit(onSubmit)}
					sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
				>
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
						<InputLabel required htmlFor="login-email">Адреса електронної пошти:</InputLabel>
						<TextField
							{...registers.email}
							error={!!(errors && errors.email?.message)}
							helperText={errors.email?.message || ' '}
							id="login-email"
							placeholder="Адреса електронної пошти"
						/>
					</Box>

					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
						<InputLabel required htmlFor="login-password">Пароль:</InputLabel>
						<TextField
							{...registers.password}
							error={!!(errors && errors.password?.message)}
							helperText={errors.password?.message || ' '}
							id="login-password"
							type="password"
							placeholder="Пароль"
						/>
					</Box>

					<Box sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						flexWrap: 'wrap',
						rowGap: { ss: 3 },
					}}
					>
						<Typography variant="body1" sx={{ order: { ss: 2, sm: 1 } }}>
							Немає аккаунту?
							{' '}
							<Link component={NavLink} to="/signup">
								Створити аккаунт
							</Link>
						</Typography>
						<Button
							type="submit"
							variant="contained"
							disabled={!isValidFixed}
							size="large"
							sx={{ width: { ss: '100%', sm: 'auto' }, order: { ss: 1, sm: 2 } }}
						>
							Увійти
						</Button>
					</Box>
				</Box>
			</Grid>

		</Grid>
	);
}
