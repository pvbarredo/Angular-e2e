'use strict';

var FieldEditPage = require('../page-objects/FieldEditPage'),
	FieldViewPage = require('../page-objects/FieldViewPage'),
	Navigation = require('../page-objects/Navigation'),
	config = require('../data/config.js').config();

describe("Create in Field Maintenance", function(){
	var navigation = new Navigation(),
		fieldEditPage = new FieldEditPage(),
		fieldViewPage = new FieldViewPage();

	beforeAll(function(){
		navigation.gotoFieldViewPage();
		fieldViewPage.searchFields();
	});

	it('Should open modal to create field',function(){
		fieldViewPage.createButton.click();
	});

	it('Should input data for new field',function(){
		fieldEditPage.module.click();
		element(by.className('ui-select-choices-row-inner')).click();
		
		fieldEditPage.descriptionTextBox.sendKeys('Sample Description');
		fieldEditPage.pathTextBox.sendKeys('dummy path');

		fieldEditPage.section.click();
		element(by.className('ui-select-choices-row-inner')).click();

		fieldEditPage.dataType.click();
		element(by.className('ui-select-choices-row-inner')).click();

		fieldEditPage.status.click();
		element(by.className('ui-select-choices-row-inner')).click();

		fieldEditPage.addOptValueButton.click();
		fieldEditPage.optValue.sendKeys('Sample Option Value');

	});

	it('Should save the data',function(){
		fieldEditPage.save();
		browser.pause();
	});

});