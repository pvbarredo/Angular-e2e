'use strict';

var LoginPage = require('../page-objects/LoginPage');
var config = require('../data/config.js').config();

describe("Login into DOCSOP", function() {
	
	it("Check Title", function() {
		
		LoginPage.login(config);

		expect(browser.getTitle()).toEqual('SOP Automation');
	});

})