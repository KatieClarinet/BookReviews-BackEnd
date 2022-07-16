import {query} from '../index.js';

//SQL string to create an empty table on Heroku
const sqlString = `CREATE TABLE IF NOT EXISTS books (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    author TEXT,
    title TEXT,
    review TEXT,
    image TEXT
);`;

//Create table function executed via script
async function createTable() {
	const result = await query(sqlString);
	console.log('Table created');
}

createTable();