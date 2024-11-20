import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../Container';
import { Button } from 'primereact/button';
import { decrement, increment } from '../../counter/counterSlice';

export default function CounterDemo() {
	// retrive state value from store
	const count = useSelector((state) => state.counter.value);
	// Create disptach method to update the state
	const dispatch = useDispatch();

	return (
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
	);
}
