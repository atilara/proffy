import express from 'express';

const app = express();

app.get('/users', (request, response) => {
	const users = [
		{ name: 'Átila Rodrigues', age: 17 },
		{ name: 'Michel Teló', age: 32 },
	];

	return response.json(users);
});

// Ouvir requisições http
app.listen(3333);
