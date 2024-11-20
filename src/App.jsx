import { useState } from 'react';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './counter/counterSlice';

function App() {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<>
			<div className="container mb-4">
				<h1>Redux Toolkit Quick Start</h1>
				<p>Click on the Vite and React logos to learn more</p>
			</div>
			<div className="container">
				<div className="card flex gap-3 align-items-center">
					<Button label="Increment" onClick={() => dispatch(increment())} />
					<span className="text-500 font-medium text-2xl">{count}</span>
					<Button
						label="Decrement"
						severity="danger"
						onClick={() => dispatch(decrement())}
					/>
				</div>
			</div>
		</>
	);
}

export default App;
