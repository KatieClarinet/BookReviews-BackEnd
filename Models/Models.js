import { pool } from '../index.js';
// import bookData from "../Data/Data.js";

// Retrieves all information within the database table.
export async function getAllReviews() {
	const result = await pool.query(
		`SELECT * FROM books;`);
	console.log(`${result} line 20`)
	 return result.rows;
}

export async function getSearchedReview(searchField) {
	console.log(`IT'S HERE! (from models) ${searchField} !`);
	console.log(searchField)
	const result = await pool.query(
		`SELECT * FROM books WHERE LOWER(author) LIKE LOWER('%' || $1 || '%') OR LOWER(title) LIKE LOWER('%' || $1 || '%') ORDER BY title ASC;`,
		[searchField]
	);
	// console.log(result.rows[0]);
	return result.rows;
}

