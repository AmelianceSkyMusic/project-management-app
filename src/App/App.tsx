import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout';
import { LogIn } from './pages/Authentication/LogIn';
import { SignUp } from './pages/Authentication/SignUp';
import { Board } from './pages/Board';
import { Main } from './pages/Main';
import { NotFound } from './pages/NotFound';
import { ThemedComponentWrapper } from './styles/themeMode/ThemedComponentWrapper';

export function App() {
	return (
		<ThemedComponentWrapper>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Main />} />
					<Route path="board" element={<Board />} />
					<Route path="login" element={<LogIn />} />
					<Route path="signup" element={<SignUp />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</ThemedComponentWrapper>
	);
}
