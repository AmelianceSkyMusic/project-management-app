import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import {
	Box,
	Button, Grid,
	InputLabel, Link, TextField, Typography,
} from '@mui/material';

import asm from '~/asmlib/asm-scripts';
import { signUp } from '~store/auth/actions/signUp';
import { useTypedDispatch } from '~store/hooks/useTypedDispatch';
import { useTypedSelector } from '~store/hooks/useTypedSelector';
import { ISingUpUser } from '~types/api/auth/singUp';

export function SignUp() {
	const { isLoading, error, auth } = useTypedSelector((state) => state.authReducer);
	const dispatch = useTypedDispatch();
	const { t } = useTranslation();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ISingUpUser>({
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
			required: t('required') || '',
			minLength: { value: 2, message: t('nameMinLength') },
			pattern: { value: /^[A-Za-z]+$/i, message: t('namePattern') },
		}),
		login: register('login', {
			required: t('required') || '',
			pattern: { value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i, message: t('emailPattern') },
		}),
		password: register('password', {
			required: t('required') || '',
			pattern: { value: /^[0-9]+$/i, message: t('passwordPattern') },
			minLength: { value: 12, message: t('passwordMinLength') },
		}),
	};

	const onSubmit: SubmitHandler<ISingUpUser> = async ({ name, login, password }: ISingUpUser) => {
		dispatch(signUp({ name, login, password }));
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
				<Typography variant="h3">{t('registration')}</Typography>
				<Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
						<InputLabel required htmlFor="signin-name">{t('name')}</InputLabel>
						<TextField
							{...registers.name}
							error={!!(errors && errors.name?.message)}
							helperText={errors.name?.message || ' '}
							id="signin-name"
							placeholder={t('name') || 'name'}
						/>
					</Box>

					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
						<InputLabel required htmlFor="signin-login">
							{t('email')}
							:
						</InputLabel>
						<TextField
							{...registers.login}
							error={!!(errors && errors.login?.message)}
							helperText={errors.login?.message || ' '}
							id="signin-login"
							placeholder={t('email') || 'email'}
						/>
					</Box>

					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
						<InputLabel required htmlFor="signin-password">
							{t('password')}
							:
						</InputLabel>
						<TextField
							{...registers.password}
							error={!!(errors && errors.password?.message)}
							helperText={errors.password?.message || ' '}
							id="signin-password"
							type="password"
							placeholder={t('password') || 'password'}
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
							{t('signupQuestion')}
							{' '}
							<Link component={NavLink} to="/signin">
								{t('login')}
							</Link>
						</Typography>
						<Button type="submit" variant="contained" disabled={!isValidFixed} size="large" sx={{ width: { ss: '100%', sm: 'auto' }, order: { ss: 1, sm: 2 } }}>
							{t('signupAdd')}
						</Button>
					</Box>
				</Box>

			</Grid>
		</Grid>
	);
}
