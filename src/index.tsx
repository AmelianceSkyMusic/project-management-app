import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App/App';

import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
);
