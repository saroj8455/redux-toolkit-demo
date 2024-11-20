import React from 'react';
import Container from './Container';
import { useSelector } from 'react-redux';

export default function Header() {
	const centralCounter = useSelector((state) => state.counter.value);

	return (
		<Container>
			<div className="card my-5">
				<h1>
					Redux Toolkit Quick Start -
					<span className="text-orange-400 ml-4">{centralCounter}</span>
				</h1>
				<p>Click on the Vite and React logos to learn more</p>
			</div>
		</Container>
	);
}
