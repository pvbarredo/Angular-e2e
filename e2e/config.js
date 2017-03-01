exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	capabilities: {
		'browserName': 'firefox'
	},
	suites: {
		Login : 'Login/*.spec.js',
	    CelRestructureView: 'CelRestructureView/*.spec.js',
	    FieldView: 'FieldView/*.spec.js',
	    GuideView: 'GuideView/*.spec.js',
	    Menu : 'Menu/*.spec.js',
	    SopView: 'SopView/*.spec.js',
	    TypeView: 'TypeView/*.spec.js',
	    UserView: 'UserView/*.spec.js'
	  },
	params: {
		login: {
			username: 'barrepe'
		},
		env: {
			url: 'http://caqa2.oocl.com/njs_prs_docsop',
		}
	},
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 500000,
	}
};