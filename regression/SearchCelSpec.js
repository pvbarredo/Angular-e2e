'use strict';

var LoginPage = require('../page-objects/LoginPage'),
	CelRestructurePage = require('../page-objects/CelRestructurePage'),
	Navigation = require('../page-objects/Navigation'),
	config = require('../data/config.js').config(),
	_ = require('lodash');

describe("Search CEL", function(){
	var navigation = new Navigation();
	var celRestructurePage = new CelRestructurePage();

	beforeAll(function(){
		navigation.gotoCELRestructureViewPage();
	});

    it("test", function(){
    	console.log(_.sum([6,5]));
		celRestructurePage.celIdSearchCriteria.sendKeys('1234');
		celRestructurePage.search();
    	browser.pause();

    })

});


