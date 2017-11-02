const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const plants = [
	{
		name: 'Dogwood',
		zone: 8,
		type: 'perennial',
	},
	{
		name: 'Sundew',
		zone: 9,
		type: 'perennial'
	},
	{
		name: 'Azalea',
		zone: 4,
		type: 'perennial',
	},
	{
		name: 'Bleeding Heart',
		zone: 5,
		type: 'perennial',
	},
	{
		name: 'Rose',
		zone: 3,
		type: 'perennial',
	},
	{
		name: 'Laurel',
		zone: 8,
		type: 'perennial',
];

app.use(bodyParser.json());

app.use(cors());

app.get('/plants', (req, res) => {
	res.send(plants);
});

app.post('/new-plants', (req, res) => {
	plants.push(req.body);
	res.send(plants);
});

app.put('/update-plants', (req, res) => {
	const index = req.body.index;
	plants[index] = req.body.update;
	res.send(plants);
});

app.delete('/delete-plants', (req, res) => {
	const index = req.body.index;
	plants.splice(index, 1);
	res.send(plants);
});

app.listen(5000, () => {
	console.log('server listening on port 5000');
});