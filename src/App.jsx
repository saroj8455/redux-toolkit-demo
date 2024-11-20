import { useState } from 'react';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex

import Header from './components/Header';
import CounterDemo from './components/redux-demo/CounterDemo';

function App() {
	return (
		<>
			<Header />
			<CounterDemo />
		</>
	);
}

export default App;
