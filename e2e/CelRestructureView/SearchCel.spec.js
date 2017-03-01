'use strict';

var LoginPage = require('../Login/LoginPage.po'),
	CelRestructurePage = require('./CelRestructurePage.po'),
	Navigation = require('../Util/Navigation'),
	LoginPage = require('../Login/LoginPage.po'),
	_ = require('lodash');

describe("Search CEL", function(){
	var navigation = new Navigation(),
		celRestructurePage = new CelRestructurePage(),
		loginPage = new LoginPage(browser.params);

	beforeAll(function(){
		loginPage.login();
		navigation.gotoCELRestructureViewPage();
	});

    it("test", function(){
    	console.log(_.sum([6,5]));
		celRestructurePage.celIdSearchCriteria.sendKeys('1234');
		celRestructurePage.search();
    	browser.pause();

    })

});


