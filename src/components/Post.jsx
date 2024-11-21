import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { postUrl } from '../common';

export default function Post({ post }) {
	const [visible, setVisible] = useState(false);

	const handelUpdate = (postId) => {
		console.log(postId);
	};
	const handelDelete = async (postId) => {
		try {
			// retrive post
			const resp = await fetch(`${postUrl}/${postId}`);
			const existPost = await resp.json();
			console.log(existPost);

			const response = await fetch(`${postUrl}/${postId}`, {
				method: 'DELETE',
			});
			if (response.ok) {
				console.log('Post deleted successfully');
				setVisible(true);
				// Fetch the updated data from the server
				// fetchData();
			}
		} catch (error) {
			// alert('postId you have check not exist.');
			// setVisible(true);
			console.log(error);
		}
	};

	return (
		<li key={post.id} className="mb-3">
			<div className="mr-8 md:mr-8">
				<span className="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">
					{post.body} - [{post.author}]
				</span>
				<div className="flex justify-content-between">
					<div className="text-600 flex gap-2 align-items-center">
						<i className="pi pi-eye"></i>
						{post.views}
					</div>
					<div className="card flex gap-2">
						<Button
							icon="pi pi-file-edit"
							rounded
							text
							severity="help"
							aria-label="Favorite"
							onClick={() => handelUpdate(post.id)}
						/>
						<Button
							icon="pi pi-times"
							rounded
							text
							severity="danger"
							aria-label="Cancel"
							onClick={() => handelDelete(post.id)}
						/>
					</div>
				</div>
			</div>
			<div className="card">
				<Dialog
					header="Post has been deleted"
					visible={visible}
					style={{ width: '50vw' }}
					onHide={() => {
						if (!visible) return;
						setVisible(false);
					}}
				>
					<p className="m-0">Post successfully delete from DB.</p>
				</Dialog>
			</div>
		</li>
	);
}
