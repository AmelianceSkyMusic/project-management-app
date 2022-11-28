import { SubmitHandler, useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

import {
	Box,
	Button, Grid,
	InputLabel, Link, TextField, Typography,
} from '@mui/material';

import asm from '~/asmlib/asm-scripts';
import { createUser, loginUser } from '~api/auth';
import { IUser } from '~types/api';

export function SignUp() {

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IUser>({
		mode: 'onSubmit',
		defaultValues: {
			name: '',
			login: '',
			password: '',
		},
	});

	const isValidFixed = asm.isObjectEmpty(errors);//* fix isValid default has false

	const registers = {
		name: register('name', {
			required: 'Поле таке пусте! Введіть більше символів!',
			minLength: { value: 1, message: 'Мінімальна довжина поля 1 символ!' },
			pattern: { value: /^[A-Za-z]+$/i, message: 'Будь ласка, використовуйте тільки латинські літери!' },
		}),
		login: register('login', {
			required: 'Поле таке пусте! Введіть більше символів!',
			pattern: { value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i, message: 'Невірно введена адреса електронної пошти!' },
		}),
		password: register('password', {
			required: 'Поле таке пусте! Введіть більше символів!',
			pattern: { value: /^[0-9]+$/i, message: 'Будь ласка, використовуйте тільки цифри!' },
			minLength: { value: 12, message: 'Мінімальна довжина пароля 12 символів' },
		}),
	};

	const onSubmit: SubmitHandler<IUser> = async ({ name, login, password }: IUser) => {
		const response = await createUser({ name, login, password });
		if (response.status === 200) {
			const responseLogin = await loginUser({ login, password });
			if (response.status === 200) localStorage.setItem('token', `${responseLogin.data?.token}`);
		}
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
				<Typography variant="h3">Реєстрація</Typography>
				<Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
						<InputLabel required htmlFor="singin-name">{'Ім\'я:'}</InputLabel>
						<TextField
							{...registers.name}
							error={!!(errors && errors.name?.message)}
							helperText={errors.name?.message || ' '}
							id="singin-name"
							placeholder="Ім'я"
						/>
					</Box>

					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
						<InputLabel required htmlFor="singin-login">Адреса електронної пошти:</InputLabel>
						<TextField
							{...registers.login}
							error={!!(errors && errors.login?.message)}
							helperText={errors.login?.message || ' '}
							id="singin-login"
							placeholder="Адреса електронної пошти"
						/>
					</Box>

					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
						<InputLabel required htmlFor="singin-password">Пароль:</InputLabel>
						<TextField
							{...registers.password}
							error={!!(errors && errors.password?.message)}
							helperText={errors.password?.message || ' '}
							id="singin-password"
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
							Вже є аккаунт?
							{' '}
							<Link component={NavLink} to="/login">
								Увійти
							</Link>
						</Typography>
						<Button type="submit" variant="contained" disabled={!isValidFixed} size="large" sx={{ width: { ss: '100%', sm: 'auto' }, order: { ss: 1, sm: 2 } }}>
							Створити аккаунт
						</Button>
					</Box>
				</Box>

			</Grid>
		</Grid>
	);
}
