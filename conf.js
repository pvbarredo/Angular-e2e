exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: [
		'regression/LoginSpec.js'
	],
	capabilities: {
		'browserName': 'firefox'
	}
};