'use strict';
var fs = require('fs');
var LoginPage = require('../page-objects/LoginPage');
var data = require('../data/config.js');

describe('Login into DOCSOP', function(){
	it('should Login ', function() {
		var values = data.configData();
		LoginPage.login(values);
		expect(browser.getCurrentUrl()).toMatch('http://dequial-w7.corp.oocl.com:3216/njs_prs_docsop/#/SopView');
	});
})