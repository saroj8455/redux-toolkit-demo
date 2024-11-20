import { useEffect, useState } from 'react';
import { postUrl } from '../common';

export default function usePost() {
	const [posts, setPost] = useState([]);

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const resp = await fetch(`${postUrl}`);
				if (!resp.ok) throw new Error('Something went wrong');
				const data = await resp.json();
				setPost(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchPost();
	}, []);
	return { posts };
}
