import { useState } from 'react';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './counter/counterSlice';
import Container from './components/Container';
import Header from './components/Header';

function App() {
	// retrive state value from store
	const count = useSelector((state) => state.counter.value);
	// Create disptach method to update the state
	const dispatch = useDispatch();

	return (
		<>
			<Header />
			<Container>
				<div className="card flex gap-3 align-items-center">
					<Button label="Increment" onClick={() => dispatch(increment())} />
					<span className="text-500 font-medium text-2xl">{count}</span>
					<Button
						label="Decrement"
						severity="danger"
						onClick={() => dispatch(decrement())}
					/>
				</div>
			</Container>
		</>
	);
}

export default App;
