const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

const plants = [
	{
		id: 0,
		name: 'Rhododendron',
		family: 'Ericaceae',
		zone: 4-8,
		companions: ['Dogwood', 'Azalea', 'Jasmine'],
	},
	{
		id: 1,
		name: 'Azalea',
		family: 'Ericaceae',
		zone: 5-8,
		companions: ['Jasmine', 'Rhododendron', 'Dogwood'],
	},
	{
		id: 2,
		name: 'Jasmine',
		family: 'Oleaceae',
		zone: 6-10,
		companions: ['Rhododendon', 'Dogwood', 'Azalea'],
    },
    {
		id: 3,
		name: 'Dogwood',
		family: 'Cornaceae',
		zone: 5-9,
		companions: ['Azalea', 'Jasmine', 'Rhododendon'],
	},
];

app.get('/plants', (req, res) => {
	res.send(plants);
});

app.get('/plants/:id', (req, res) => {
	const plant = plants.filter(plant => plant.id.toString() === req.params.id)[0];
	res.send(plant);
});

app.post('/new-plant', (req, res) => {
	if (req.body.id !== undefined) plants.push(req.body);
	res.send(plants);
});

app.listen(5000, () => {
	console.log('Server listening on port 5000');
});
