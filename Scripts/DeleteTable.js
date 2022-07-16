import { query } from "../index.js";

const sqlString = `DROP TABLE books`;
async function dropTable() {
	const result = await query(sqlString);
	console.log('Table deleteed');
}

dropTable();