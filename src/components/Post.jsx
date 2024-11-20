import React from 'react';

export default function Post({ post }) {
	return (
		<li key={post.id} className="mb-3">
			<div className="mr-8 md:mr-8">
				<span className="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">
					{post.title}
				</span>
				<div className="text-600 flex gap-2 align-items-center">
					<i className="pi pi-eye"></i>
					{post.views}
				</div>
			</div>
		</li>
	);
}
