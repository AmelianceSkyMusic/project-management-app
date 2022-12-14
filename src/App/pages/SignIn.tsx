import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import {
	Box, Button,
	Grid, InputLabel,
	Link,
	TextField, Typography,
} from '@mui/material';

import asm from '~/asmlib/asm-scripts';
import { signIn } from '~store/auth/actions/signIn';
import { useTypedDispatch } from '~store/hooks/useTypedDispatch';
import { useTypedSelector } from '~store/hooks/useTypedSelector';
import { ISignInUser } from '~types/api/auth/signIn';

export function SignIn() {
	const { error } = useTypedSelector((state) => state.authReducer);

	const dispatch = useTypedDispatch();
	const { t } = useTranslation();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ISignInUser>({
		mode: 'onSubmit',
		defaultValues: {
			login: '',
			password: '',
		},
	});

	const isValidFixed = asm.isObjectEmpty(errors);//* fix isValid default has false

	const registers = {
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

	const onSubmit: SubmitHandler<ISignInUser> = async ({ login, password }: ISignInUser) => {
		dispatch(signIn({ login, password }));
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
				<Typography variant="h3">{t('enter')}</Typography>

				<Box
					component="form"
					onSubmit={handleSubmit(onSubmit)}
					sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
				>
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
						<InputLabel required htmlFor="login-login">
							{t('email')}
							:
						</InputLabel>
						<TextField
							{...registers.login}
							error={!!(errors && errors.login?.message)}
							helperText={errors.login?.message || ' '}
							id="login-login"
							placeholder={t('email') || 'email'}
						/>
					</Box>

					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
						<InputLabel required htmlFor="login-password">
							{t('password')}
							:
						</InputLabel>
						<TextField
							{...registers.password}
							error={!!(errors && errors.password?.message)}
							helperText={errors.password?.message || ' '}
							id="login-password"
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
							{t('loginQuestion')}
							{' '}
							<Link component={NavLink} to="/signup">
								{t('signupAdd')}
							</Link>
						</Typography>
						<Button
							type="submit"
							variant="contained"
							disabled={!isValidFixed}
							size="large"
							sx={{ width: { ss: '100%', sm: 'auto' }, order: { ss: 1, sm: 2 } }}
						>
							{t('login')}
						</Button>
					</Box>
				</Box>
			</Grid>

		</Grid>
	);
}
