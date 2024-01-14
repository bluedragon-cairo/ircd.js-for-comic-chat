const bcrypt = require('bcrypt');

module.exports = {
	hash(text, fn) {
		bcrypt.hash(text, 10, function(err, hash) {
			fn(err, hash);
		});
	},

	compareHash: bcrypt.compare
};
