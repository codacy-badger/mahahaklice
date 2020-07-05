const fs = require('fs');
const _ = require('lodash');
const casual = require('casual');
const {v4: uuidv4} = require('uuid');

casual.seed(2222);

const SPECIES = ['Humans', 'Draenei', 'Dryads', 'Dwarves', 'Gnomes', 'Worgen'];
casual.define('mahahaklica', () => {
	return {
		itemId: 1,
		iteration: 1,
		isLatest: false,
		rating: casual.integer(from = 900, to = 1400),
		name: _.upperFirst(casual.word),
		description: casual.description,
		date: casual.moment.toDate(),
		species: casual.random_element(SPECIES)
	};
});

const COUNT = casual.integer(from = 95, to = 105);
const RANGE = _.range(COUNT);
const mahahaklice = _.reduce(RANGE, (r, i) => {
	let max = casual.integer(from = 1, to = 15);
	max = casual.integer(from = 1, to = max);
	max = casual.integer(from = 1, to = 2 * max);

	let itemId = uuidv4();
	let iterations = _.range(1, max + 1);
	_.each(iterations, (iteration) => {
		let mahahaklica = casual.mahahaklica;
		mahahaklica.itemId = itemId;
		mahahaklica.iteration = iteration;
		mahahaklica.isLatest = iteration === max;
		r.push(mahahaklica);
	});
	return r;
}, []);

fs.writeFileSync("mahahaklice-initial-data.json", JSON.stringify(mahahaklice, null, '\t'));