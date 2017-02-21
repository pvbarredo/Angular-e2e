exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: [
		'regression/LoginSpec.js',
		// 'regression/GuideView/SearchGuideSpec.js'
		'regression/FieldView/CreateFieldSpec.js',
		// 'regression/DeleteFieldSpec.js'
	],
	capabilities: {
		'browserName': 'firefox'
	}
};