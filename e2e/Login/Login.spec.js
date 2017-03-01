'use strict';

var LoginPage = require('./LoginPage.po');

describe("Login into DOCSOP", function() {
	var loginPage = new LoginPage(browser.params);

	it("Check Title", function() {
		loginPage.login();
		expect(browser.getTitle()).toEqual('SOP Automation');
	});

})