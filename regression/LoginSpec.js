'use strict';

var LoginPage = require('../page-objects/LoginPage');
var config = require('../data/config.js').config();

describe("Login into DOCSOP", function() {
	var loginPage = new LoginPage(config);

	it("Check Title", function() {
		loginPage.login();
		expect(browser.getTitle()).toEqual('SOP Automation');
	});

})