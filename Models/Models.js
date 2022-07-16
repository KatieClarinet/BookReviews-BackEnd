import { pool } from '../index.js';
import bookData from "../Data/Data.js";

// Retrieves all information within the database table.
export async function getAllReviews() {
	const result = await pool.query(`SELECT * FROM books`);
	return result.rows;
	
}

export async function getSearchedReview(searchField) {
	console.log(`IT'S HERE! (from models) ${searchField} !`);
	console.log(searchField)
	// SQL: select everything from the snippets table where there title contains value1 [expressed here]. || represents a space.
	const result = await pool.query(
		`SELECT * FROM books WHERE LOWER(author) LIKE LOWER('%' || $1 || '%') OR LOWER(title) LIKE LOWER('%' || $1 || '%');`,
		[searchField]
	);
	console.log(result.rows[0]);
	return result.rows;
}