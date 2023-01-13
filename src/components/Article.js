import React from "react";

function Article({ title, date, preview }) {
	return (
		<div>
			<article>
				<h3>{title}</h3>
				{date ? <small>{date}</small> : <small>January 13, 2022</small>}

				<p>{preview}</p>
			</article>
		</div>
	);
}

export default Article;