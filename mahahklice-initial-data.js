const fs = require('fs');
const _ = require('lodash');
const casual = require('casual');
const {v4: uuidv4} = require('uuid');

casual.seed(2222);

const SPECIES = ['Humans', 'Draenei', 'Dryads', 'Dwarves', 'Gnomes', 'Worgen'];
casual.define('mahahklica', () => {
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
const mahahklice = _.reduce(RANGE, (r, i) => {
	let max = casual.integer(from = 1, to = 15);
	max = casual.integer(from = 1, to = max);
	max = casual.integer(from = 1, to = 2 * max);

	let itemId = uuidv4();
	let iterations = _.range(1, max + 1);
	_.each(iterations, (iteration) => {
		let mahahklica = casual.mahahklica;
		mahahklica.itemId = itemId;
		mahahklica.iteration = iteration;
		mahahklica.isLatest = iteration === max;
		r.push(mahahklica);
	});
	return r;
}, []);

fs.writeFileSync("mahahklice-initial-data.json", JSON.stringify(mahahklice, null, '\t'));