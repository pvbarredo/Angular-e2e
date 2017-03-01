'use strict';

var FieldEditPage = require('../../page-objects/FieldEditPage'),
	FieldViewPage = require('../../page-objects/FieldViewPage'),
	Navigation = require('../../page-objects/Navigation'),
	config = require('../../data/config.js').config();

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
		expect(fieldEditPage.pathTextBox.getAttribute('value')).toEqual('');
	});

	it('Should input data for new field',function(){
		fieldEditPage.module.click();
		fieldEditPage.moduleSelectWrapper.selectItem('DOC SOP');
		
		fieldEditPage.descriptionTextBox.sendKeys('Sample Description');
		fieldEditPage.pathTextBox.sendKeys('dummy path');

		fieldEditPage.section.click();
		fieldEditPage.sectionSelectWrapper.selectItem('Party');

		fieldEditPage.dataType.click();
		fieldEditPage.dataTypeSelectWrapper.selectItem('Number');

		fieldEditPage.status.click();
		fieldEditPage.statusSelectWrapper.selectItem('in-active');

		fieldEditPage.addOptValueButton.click();
		fieldEditPage.optValue.sendKeys('Sample Option Value');

	});

	it('Should save the data',function(){
		fieldEditPage.save();
		browser.pause();
	});

});