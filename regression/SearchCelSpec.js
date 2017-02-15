'use strict';

var LoginPage = require('../page-objects/LoginPage'),
	CelRestructurePage = require('../page-objects/CelRestructurePage'),
	Navigation = require('../page-objects/Navigation'),
	config = require('../data/config.js').config();

describe("Search CEL", function(){
	var navigation = new Navigation();
	var celRestructurePage = new CelRestructurePage();

	beforeAll(function(){
		navigation.gotoCELRestructureViewPage();
	});


    it("test", function(){
    		
    })

});


