import { useEffect, useState } from 'react';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex

import Header from './components/Header';
import CounterDemo from './components/redux-demo/CounterDemo';
import Container from './components/Container';
import { postUrl } from './common/index';
import { v6 as uuidv6 } from 'uuid';
import usePost from './hooks/usePost';
import Post from './components/Post';
import Heading from './components/Heading';

function App() {
	const { posts } = usePost();

	return (
		<>
			<Header />
			<CounterDemo />
			<Container>
				<div className="card my-5">
					<Heading>Posts Info - {posts.length}</Heading>
					<ul className="list-none p-0 m-0">
						{posts.map((post) => {
							return <Post post={post} key={post.id} />;
						})}
					</ul>
				</div>
			</Container>
		</>
	);
}

export default App;
