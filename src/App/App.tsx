import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Layout } from '~components/Layout';
import { Board } from '~pages/Board';
import { Main } from '~pages/Main';
import { NotFound } from '~pages/NotFound';
import { SignIn } from '~pages/SignIn';
import { SignUp } from '~pages/SignUp';
import { store } from '~store/store';
import { ThemedComponentWrapper } from '~styles/themeMode/ThemedComponentWrapper';

export function App() {
	return (
		<ThemedComponentWrapper>
			<Provider store={store}>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Main />} />
						<Route path="board" element={<Board />} />
						<Route path="signin" element={<SignIn />} />
						<Route path="signup" element={<SignUp />} />
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</Provider>
		</ThemedComponentWrapper>
	);
}
