'use strict';
var fs = require('fs');
var LoginPage = require('../page-objects/LoginPage');
// var data = require
var data = require('../data/config.js');
// var data = {
// 	"login" : {
// 		"username" : "jiangda2"
// 	},
// 	"env" : {
// 		"url" : "http://dequial-w7:3216/njs_prs_docsop",
// 		//todo : Create a catching that in certain regression testing, prod is disabled.
// 		// "url" : "ca.oocl.com/njs_prs_docsop",
// 		// "url" : "http://caqa2.oocl.com/njs_prs_docsop",
// 		// "url" : "http://capp.oocl.com/njs_prs_docsop"
// 	}
// };

describe('Login into DOCSOP', function(){
	it('should Login ', function() {
		var values = data.configData();
		LoginPage.LoginPage(values);
		expect(browser.getCurrentUrl()).toMatch('http://dequial-w7.corp.oocl.com:3216/njs_prs_docsop/#/SopView');
	});
})