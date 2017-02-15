exports.config = config;

function config() {
	return {
		login: {
			username: 'barrepe'
		},
		env: {
			//url : 'http://barrepe-w7.corp.oocl.com:3216/njs_prs_docsop'
			//url : 'ca.oocl.com/njs_prs_docsop',
			url: 'http://caqa2.oocl.com/njs_prs_docsop',
			//url : 'http://capp.oocl.com/njs_prs_docsop'
		},
		jasmine_default_timeout_interval:500000
	}

}