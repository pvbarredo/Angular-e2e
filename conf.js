exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: [
		'regression/LoginSpec.js'
		// ,'regression/SearchCelSpec.js'
	],
	capabilities: {
		'browserName': 'firefox'
	}
};