import randomQuotes from 'random-quotes';
export const postUrl = 'http://localhost:3000/posts';

export function randomPost() {
	const post = randomQuotes();
	console.log(post.body);
	console.log(post.author);
	return post;
}
