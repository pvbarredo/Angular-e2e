exports.configData = configData;

function configData(){
	var configData = {
		"login" : {
			"username" : "jiangda2"
		},
		"env" : {
			"url" : "http://dequial-w7.corp.oocl.com:3216/njs_prs_docsop"
			//todo : Create a catching that in certain regression testing, prod is disabled.
			// "url" : "ca.oocl.com/njs_prs_docsop",
			// "url" : "http://caqa2.oocl.com/njs_prs_docsop",
			// "url" : "http://capp.oocl.com/njs_prs_docsop"
		}		
	};
	return configData;
}