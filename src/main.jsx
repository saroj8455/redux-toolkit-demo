import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { PrimeReactProvider } from 'primereact/api';
import { Provider } from 'react-redux';
import { store } from './store.jsx';

const value = {
	ripple: true,
};

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={store}>
			<PrimeReactProvider value={value}>
				<App />
			</PrimeReactProvider>
		</Provider>
	</StrictMode>
);
