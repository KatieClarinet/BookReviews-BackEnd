import {query} from '../index.js';

import bookData from '../Data/Data.js';

async function populateTable() {
	for (let i = 0; i < bookData.length; i++) {
		const result = await query(
			`INSERT INTO books(author, title, review, image) VALUES ($1, $2, $3, $4) RETURNING *;`,
			[
				bookData[i].author,
				bookData[i].title,
				bookData[i].review,
				bookData[i].image,
			]
		);
		console.log(result.rows[0].title, 'inserted');
	}
}

populateTable();