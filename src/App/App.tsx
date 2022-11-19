import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Board } from './pages/Board';
import { LogIn } from './pages/LogIn';
import { Main } from './pages/Main';
import { NotFound } from './pages/NotFound';
import { SignIn } from './pages/SignIn';
import { ThemedComponentWrapper } from './styles/themeMode/ThemedComponentWrapper';

export function App() {
	return (
		<ThemedComponentWrapper>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Main />} />
					<Route path="board" element={<Board />} />
					<Route path="login" element={<LogIn />} />
					<Route path="signin" element={<SignIn />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</ThemedComponentWrapper>
	);
}
