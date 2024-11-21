import { useEffect, useState } from 'react';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex

import Header from './components/Header';
import CounterDemo from './components/redux-demo/CounterDemo';
import Container from './components/Container';
import { postUrl, randomPost } from './common/index';
import { v6 as uuidv6 } from 'uuid';
import usePost from './hooks/usePost';
import Post from './components/Post';
import Heading from './components/Heading';
import { Button } from 'primereact/button';

function App() {
	const [data, setData] = useState([]); // State to store API data
	const { posts } = usePost();

	// Fetch data from the API
	const fetchData = async () => {
		try {
			const response = await fetch(postUrl);
			const result = await response.json();
			setData(result);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	const createPost = async () => {
		const id = uuidv6();
		const random = randomPost();
		const post = {
			id,
			...random,
			views: Math.floor(Math.random() * 1000),
		};
		console.log(post);
		try {
			const response = await fetch(postUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(post),
			});
			if (response.ok) {
				console.log('Post created successfully');
				// Approach 1: Fetch the updated data from the server
				fetchData();
			}
		} catch (error) {
			console.log(error);
		}
	};

	const updatePost = async () => {
		const postId = '1efa7b51-f3c0-6100-84dc-2431b32b810c';
		const response = await fetch(`http://localhost:3000/posts/${postId}`);
		const existPost = await response.json();
		console.log(existPost);
		const postToUpdate = {
			...existPost,
			views: 900,
		};
		console.log(postToUpdate);
		try {
			const response = await fetch(`http://localhost:3000/posts/${postId}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(postToUpdate),
			});
			if (response.ok) {
				console.log('Post updated successfully');
				// Fetch the updated data from the server
				fetchData();
			}
		} catch (error) {
			console.log(error);
		}
	};

	const deletePost = async () => {
		const postId = '1efa7b51-f3c0-6100-84dc-2431b32b810c';
		try {
			const response = await fetch(`http://localhost:3000/posts/${postId}`, {
				method: 'DELETE',
			});
			if (response.ok) {
				console.log('Post deleted successfully');
				// Fetch the updated data from the server
				fetchData();
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<Header />
			<CounterDemo />
			<Container>
				<div className="card my-5">
					<Heading>Posts Info - {data.length}</Heading>
					<hr />
					<ul className="list-none p-0 m-0">
						{data.map((post) => {
							return <Post post={post} key={post.id} />;
						})}
					</ul>
				</div>
				<div className="flex gap-3">
					<Button label="Create" onClick={createPost} icon="pi pi-check" />
					<Button
						label="Update"
						onClick={updatePost}
						severity="success"
						icon="pi pi-file"
					/>
					<Button
						label="Delete"
						onClick={deletePost}
						severity="danger"
						icon="pi pi-times"
					/>
				</div>
			</Container>
		</>
	);
}

export default App;
